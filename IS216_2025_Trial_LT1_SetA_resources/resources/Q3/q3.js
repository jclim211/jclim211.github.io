/*
  Name: LIM Jie Ching
  Email: jc.lim.2024
*/
// Global variables provided
let logNumber = 0;
const maxLogs = 10;

// Add any other global variables you need here
//
// End of add global variables

function addLog(newLog) {
    const logBox = document.getElementById("logs");

    for(log of newLog) {
        // Part C: Add code below
        //
        if(logNumber < 9) {
            var listItem = document.createElement("LI");
            listItem.innerHTML = log;
            logBox.append(listItem);
            logNumber += 1;
            document.getElementById("errorMsg").innerText  = "";
        }
        // End of Part C
    }
}

function halveLogs() {
    const logBox = document.getElementById("logs");
    const logItems = logBox.getElementsByTagName('li');

    // Part E: Add code below
    //
    
    var halflogs = Math.floor(logItems.length / 2)
    if (logItems.length > 1){
        for(let i = 0; i < halflogs; i++){
            logItems[i].remove();
            logNumber -= 1;
        }
        document.getElementById("errorMsg").innerText  = ""
        console.log(logItems.length);
        console.log(logNumber);
    }
    else{
        document.getElementById("errorMsg").innerText  = "Not enough logs to remove";
    }
    // End of Part E
}

function changeColor() {
    const toggleButtonIsDisabled = document.getElementById('toggleButton').disabled;
    if (!toggleButtonIsDisabled) {
        // Part D: Debug the following block of if code
        if(logNumber >= maxLogs - 1) {
            document.getElementById("errorMsg").innerText  = "Clear some logs before proceeding";
        }
        // End debugging task Part D

        else {
            const bulb = document.getElementById('bulb');
            // Part A: Add code below
            //
            if(bulb.style.fill == 'yellow') {
                bulb.style.fill = 'white';
            }
            else {
                bulb.style.fill = 'yellow';
            }
            // End of Part A
            
            delayButton();

            if(bulb.style.fill == 'yellow') {
                addLog(["User interacts.", "ON.", "Bulb lights up."]);
            }
            else {
                addLog(["User interacts.", "OFF.", "Bulb turns off."]);
            }
        }
    }
}

function delayButton() {
    // Part B: Add code below 
    //
    const toggleButton = document.getElementById('toggleButton');
    document.getElementById('toggleButton').disabled = true;
    setTimeout(() => {document.getElementById('toggleButton').disabled = false;}, 1000);
    // End of Part B
}