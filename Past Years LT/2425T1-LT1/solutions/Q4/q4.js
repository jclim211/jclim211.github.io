/*
  NAME: Instructor or student name goes here
  EMAIL: inst@smu.edu.sg
*/
const API_URL = 'api.php';

//Part A: Define getStations function which uses Axios GET request for 
//retrieving all bike stations and availability information. The getStations function
//should also call displayStations and populateStationDropdowns functions. (1 m)
async function getStations() {
    try {
        const response = await axios.get(API_URL);
        displayStations(response.data);
        populateStationDropdowns(response.data);
    } catch (error) {
        console.error('Error fetching stations:', error);
    }
}

function displayStations(stations) {
    const stationList = document.getElementById('station-list');
    stationList.textContent = '';
    //Part A: Display the list of bike stations and the availability of bicycles and docks in each (1 m)
    stations.forEach(station => {
        const div = document.createElement('div');
        div.className = 'station-item';
		const h3 = document.createElement('h3');
		h3.textContent = station.name;
		const pbike = document.createElement('p');
		pbike.textContent = "Available Bikes: " + station.available_bikes;
		const pdock = document.createElement('p');
		pdock.textContent = "Available Docks: " + station.available_docks;
		div.appendChild(h3);
		div.appendChild(pbike);
		div.appendChild(pdock);
        stationList.appendChild(div);
    });
}

function populateStationDropdowns(stations) {
    const stationSelect = document.getElementById('station-select');
    const returnStationSelect = document.getElementById('return-station-select');
    //Part B: Populate list of bike stations in drop down list (1 m)
	if (stationSelect.children.length<=1) {
		stations.forEach(station => {
			const option = document.createElement('option');
			option.value = station.id;
			option.textContent = station.name;
			stationSelect.appendChild(option.cloneNode(true));
			returnStationSelect.appendChild(option);
		});
	}
}

async function postAction(action, stationId) {
    //Part C: Use Axios POST request for bike rental or return at selected bike station (1.5 m)
    const data = { 'station_id': stationId, 'action': action}
    try {
        const response = await axios.post(API_URL, data);
        alert(response.data.message);
    } catch (error) {
        //Part D: Handle erroneous cases for bike rental or return (0.5 m)
        alert("Error " + action + "ing bike");
    }
}

async function rentBike() {
    const stationId = document.getElementById('station-select').value;
    if (!stationId) {
        alert('Please select a station');
        return;
    }
    
    await postAction('rent', stationId);
    getStations();
    
}

async function returnBike() {
    const stationId = document.getElementById('return-station-select').value;
    if (!stationId) {
        alert('Please select a station');
        return;
    }
    
    await postAction('return', stationId);
    getStations();
    
}

// Add event listeners
document.getElementById('rent-btn').addEventListener('click', rentBike);
document.getElementById('return-btn').addEventListener('click', returnBike);

// Initial load of stations
getStations();