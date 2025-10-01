// --- Route Planning Logic ---

let map;
let clickCount = 0;
// Helper: Calculate distance between two latlngs
function haversineDistance(a, b) {
  const R = 6371e3;
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const aVal =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
}

// Helper: Find closest point on the network to a given latlng, optionally within maxDist (meters)
function findClosestPoint(latlng, network, maxDist = Infinity) {
  let minDist = Infinity,
    closest = null,
    closestSeg = null,
    closestIdx = -1;
  network.forEach((line, i) => {
    for (let j = 0; j < line.length - 1; j++) {
      const p1 = line[j],
        p2 = line[j + 1];
      // Project latlng onto segment p1-p2
      const t = Math.max(
        0,
        Math.min(
          1,
          ((latlng.lat - p1.lat) * (p2.lat - p1.lat) +
            (latlng.lng - p1.lng) * (p2.lng - p1.lng)) /
            ((p2.lat - p1.lat) ** 2 + (p2.lng - p1.lng) ** 2)
        )
      );
      const proj = {
        lat: p1.lat + t * (p2.lat - p1.lat),
        lng: p1.lng + t * (p2.lng - p1.lng),
      };
      const d = haversineDistance(latlng, proj);
      if (d < minDist && d <= maxDist) {
        minDist = d;
        closest = proj;
        closestSeg = [p1, p2];
        closestIdx = i;
      }
    }
  });
  return {
    point: closest,
    segment: closestSeg,
    lineIdx: closestIdx,
    dist: minDist,
  };
}

// Build a graph from the route network (nodes: points, edges: segments)
function buildGraph(network) {
  const nodes = [];
  const edges = [];
  const nodeMap = {};
  function key(pt) {
    return pt.lat + "," + pt.lng;
  }
  network.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      const pt = line[i];
      const k = key(pt);
      if (!nodeMap[k]) {
        nodeMap[k] = nodes.length;
        nodes.push(pt);
      }
      if (i > 0) {
        const prev = line[i - 1];
        edges.push({
          from: nodeMap[key(prev)],
          to: nodeMap[k],
          weight: haversineDistance(prev, pt),
        });
        edges.push({
          from: nodeMap[k],
          to: nodeMap[key(prev)],
          weight: haversineDistance(prev, pt),
        });
      }
    }
  });
  return { nodes, edges };
}

// Dijkstra's algorithm for shortest path
function dijkstra(graph, startIdx, endIdx) {
  const dist = Array(graph.nodes.length).fill(Infinity);
  const prev = Array(graph.nodes.length).fill(null);
  dist[startIdx] = 0;
  const q = new Set(graph.nodes.map((_, i) => i));
  while (q.size) {
    let u = -1,
      minD = Infinity;
    q.forEach((i) => {
      if (dist[i] < minD) {
        minD = dist[i];
        u = i;
      }
    });
    if (u === endIdx || u === -1) break;
    q.delete(u);
    graph.edges.forEach((e) => {
      if (e.from === u && q.has(e.to)) {
        const alt = dist[u] + e.weight;
        if (alt < dist[e.to]) {
          dist[e.to] = alt;
          prev[e.to] = u;
        }
      }
    });
  }
  // Reconstruct path
  const path = [];
  let u = endIdx;
  while (u !== null) {
    path.unshift(graph.nodes[u]);
    u = prev[u];
  }
  if (
    path[0] &&
    path[0].lat === graph.nodes[startIdx].lat &&
    path[0].lng === graph.nodes[startIdx].lng
  )
    return path;
  return [];
}

// Load GeoJSON and extract route network
function extractNetworkFromGeoJson(geojson) {
  const features = geojson.features || [];
  const lines = [];
  features.forEach((f) => {
    if (f.geometry.type === "LineString") {
      lines.push(f.geometry.coordinates.map(([lng, lat]) => ({ lat, lng })));
    } else if (f.geometry.type === "MultiLineString") {
      f.geometry.coordinates.forEach((line) =>
        lines.push(line.map(([lng, lat]) => ({ lat, lng })))
      );
    }
  });
  return lines;
}

// Add click listeners for start/end selection
function enableRoutePlanning(map, network) {
  clickCount = 0;
  let overlayVisible = true;
  map.addListener("click", function (e) {
    if (clickCount === 0) {
      if (startMarker) startMarker.setMap(null);
      startMarker = new google.maps.Marker({
        position: e.latLng,
        map,
        label: "A",
      });
      if (window.updateStartInfo) window.updateStartInfo(e.latLng.toJSON());
      clickCount = 1;
    } else if (clickCount === 1) {
      if (endMarker) endMarker.setMap(null);
      endMarker = new google.maps.Marker({
        position: e.latLng,
        map,
        label: "B",
      });
      if (window.updateEndInfo) window.updateEndInfo(e.latLng.toJSON());
      clickCount = 2;
      planRouteWithDetour(
        startMarker.getPosition().toJSON(),
        endMarker.getPosition().toJSON(),
        network,
        map
      );
      // Remove the initial red overlay after planning route
      if (overlayVisible) {
        map.data.setStyle({ visible: false });
        overlayVisible = false;
      }
    } else {
      // Reset
      if (startMarker) startMarker.setMap(null);
      if (endMarker) endMarker.setMap(null);
      if (routePolyline) routePolyline.setMap(null);
      clickCount = 0;
      if (window.resetRouteUI) window.resetRouteUI();
      // Restore overlay if needed
      if (!overlayVisible) {
        map.data.setStyle({ strokeColor: "red", strokeWeight: 4 });
        overlayVisible = true;
      }
    }
  });
}

// Plan route between two points constrained to the network, or allow 100m detour if needed
function planRouteWithDetour(start, end, network, map) {
  let graph = buildGraph(network);
  // Snap start/end to closest network points, allow up to 100m detour
  let startSnap = findClosestPoint(start, network, 100);
  let endSnap = findClosestPoint(end, network, 100);
  if (!startSnap.point || !endSnap.point) {
    alert(
      "Start or end point is too far from the Park Connector Loop (max 100m detour allowed)."
    );
    return;
  }
  // Add snapped points to graph if not present
  function addNodeIfNeeded(pt, snap) {
    const idx = graph.nodes.findIndex(
      (n) => n.lat === pt.lat && n.lng === pt.lng
    );
    if (idx !== -1) return idx;
    graph.nodes.push(pt);
    // Connect to both ends of the segment
    const [a, b] = snap.segment;
    graph.edges.push({
      from: graph.nodes.length - 1,
      to: graph.nodes.findIndex((n) => n.lat === a.lat && n.lng === a.lng),
      weight: haversineDistance(pt, a),
    });
    graph.edges.push({
      from: graph.nodes.length - 1,
      to: graph.nodes.findIndex((n) => n.lat === b.lat && n.lng === b.lng),
      weight: haversineDistance(pt, b),
    });
    graph.edges.push({
      from: graph.nodes.findIndex((n) => n.lat === a.lat && n.lng === a.lng),
      to: graph.nodes.length - 1,
      weight: haversineDistance(pt, a),
    });
    graph.edges.push({
      from: graph.nodes.findIndex((n) => n.lat === b.lat && n.lng === b.lng),
      to: graph.nodes.length - 1,
      weight: haversineDistance(pt, b),
    });
    return graph.nodes.length - 1;
  }
  const startIdx = addNodeIfNeeded(startSnap.point, startSnap);
  const endIdx = addNodeIfNeeded(endSnap.point, endSnap);
  const path = dijkstra(graph, startIdx, endIdx);
  if (routePolyline) routePolyline.setMap(null);
  if (path.length > 1) {
    routePolyline = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: "#0000FF",
      strokeOpacity: 1.0,
      strokeWeight: 5,
      map: map,
    });
  } else {
    alert("No route found!");
  }
}

// For UI: plan route from text boxes
window.planRouteFromUI = function (start, end) {
  if (startMarker) startMarker.setMap(null);
  if (endMarker) endMarker.setMap(null);
  if (routePolyline) routePolyline.setMap(null);
  startMarker = new google.maps.Marker({ position: start, map, label: "A" });
  endMarker = new google.maps.Marker({ position: end, map, label: "B" });
  planRouteWithDetour(start, end, routeNetwork, map);
  clickCount = 2;
  // Remove the initial red overlay after planning route
  if (map && map.data) map.data.setStyle({ visible: false });
};

// For UI: reset all
window.resetRoutePlanner = function () {
  if (startMarker) startMarker.setMap(null);
  if (endMarker) endMarker.setMap(null);
  if (routePolyline) routePolyline.setMap(null);
  clickCount = 0;
  // Restore overlay if needed
  if (map && map.data)
    map.data.setStyle({ strokeColor: "red", strokeWeight: 4 });
};

// Wait for map to be initialized
window.initMap = function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 12,
  });
  // Load GeoJSON manually to extract network
  fetch("ParkConnectorLoop.geojson")
    .then((resp) => resp.json())
    .then((geojson) => {
      routeNetwork = extractNetworkFromGeoJson(geojson);
      map.data.addGeoJson(geojson);
      enableRoutePlanning(map, routeNetwork);
    });
  map.data.setStyle({ strokeColor: "red", strokeWeight: 4 });
};
