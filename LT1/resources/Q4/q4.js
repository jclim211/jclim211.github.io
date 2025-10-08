/*
  Name: Lim Jie Ching
  Email: jc.lim.2024
*/

// DO NOT REMOVE THESE VARIABLES
let allSlots = [];
let allRequests = [];

// DO NOT REMOVE THE BELOW LINE
loadData();



/* Part A */
function loadData() {
    console.log("(loadData) Loading data from API");

    axios.get("api.php")
    .then(response => {

        // YOUR CODE GOES HERE
        // console.log(response.data.requests);
        allRequests = response.data.requests
        console.log(allRequests)
        for (request in allRequests) {
            // console.log(request);
            allSlots.push(allRequests[request].slot);
        }
        console.log(allSlots)
        
        // DO NOT REMOVE THE BELOW LINE - THIS IS USED IN PART B
        renderSlots();

        // DO NOT REMOVE THE BELOW LINE - THIS IS USED IN PART C
        renderRequests();
    })
    .catch(error => {
        console.log(error.message);
        alert("Failed to load data.");
    })
}


/* Part B */
function renderSlots() {
    console.log("(renderSlots) Rendering Slot Dropdown Menu");

    // YOUR CODE GOES HERE
    var slotSelect = document.getElementById("slotSelect");
    for(slot of allSlots){
        console.log(slot);
        let option = document.createElement("option");
        option.id = slot;
        option.innerText = slot;
        slotSelect.appendChild(option);
    }
}


/* Part C */
function renderRequests() {
    console.log("(renderRequests) Display requests");

    // DO NOT REMOVE THESE TWO LINES
    let tbodyRequests = document.getElementById('tbodyRequests');
    tbodyRequests.textContent = '';

    // YOUR CODE GOES HERE
    
}


/* Part D */
function updateStatus() { // You may edit this line to accept one or more parameters
    console.log("(updateStatus) Updating request's status");

    // YOUR CODE GOES HERE

}


/* Part E */
function createRequest() {
    console.log("(createRequest) Sending a new request to API");

    // YOUR CODE GOES HERE
    
}