/*
  Name: LIM Jie Ching
  Email: jc.lim.2024
*/
const API_URL = 'api.php';

//Part A: Define getStations function which uses Axios GET request for 
//retrieving all bike stations and availability information. The getStations function
//should also call displayStations and populateStationDropdowns functions. (1 m)
function getStations(){
    axios
    .get(API_URL)
    .then(response => {
        // console.log(response.data);

        let stations = response.data;

        displayStations(stations);
        populateStationDropdowns(stations);
    })
    .catch(error => {
        console.log(error.message);
    })

}



function displayStations(stations) {
    const stationList = document.getElementById('station-list');
    //stationList.textContent = '';
    //Part A: Display the list of bike stations and the availability of bicycles and docks in each (1 m)
        // <div class="station-item">
        //     <h3>Central Park Station</h3>
        //     <p>Available Bikes: 10 </p>
        //     <p>Available Docks: 3 </p>
        // </div>
    // console.log(stations);
    // let resultStr = '';
    for(let stationObj of stations){
        let stationName = stationObj.name;
        let availableBikes = stationObj.available_bikes;
        let availableDocks = stationObj.available_docks;
        // resultStr = `
        //     <div class="station-item">
        //         <h3>${stationName}</h3>
        //         <p>Available Bikes: ${availableBikes} </p>
        //         <p>Available Docks: ${availableDocks} </p>
        //     </div>        
        // `;
        let div = document.createElement('div');
        div.className = "station-item";

        let h3 = document.createElement('h3');
        h3.innerText = stationName;
        div.appendChild(h3);

        let p1 = document.createElement('p');
        p1.innerText = "Available Bikes:" + availableBikes;
        div.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerText = "Available Bikes:" + availableDocks;
        div.appendChild(p2);

        stationList.appendChild(div);
    }

    // stationList.innerHTML = resultStr;
}

function populateStationDropdowns(stations) {
    const stationSelect = document.getElementById('station-select');
    const returnStationSelect = document.getElementById('return-station-select');
    //Part B: Populate list of bike stations in drop down list (1 m)
    for(let stationObj of stations){
        let stationName = stationObj.name;
        let stationId = stationObj.id
        let option = document.createElement('option');
        option.value = stationId;
        option.innerText = stationName;
        stationSelect.appendChild(option);
        returnStationSelect.appendChild(option);
    }
}

async function postAction(action, stationId) {
    //Part C: Use Axios POST request for bike rental or return at selected bike station (1.5 m)

    //Part D: Handle erroneous cases for bike rental or return (0.5 m)

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