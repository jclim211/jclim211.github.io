/*
  NAME:
  EMAIL:
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
        // End of Part C
    }
}

function halveLogs() {
    const logBox = document.getElementById("logs");
    const logItems = logBox.getElementsByTagName('li');

    // Part E: Add code below
    //
    // End of Part E
}

function changeColor() {
    const toggleButtonIsDisabled = document.getElementById('toggleButton').disabled;
    if (!toggleButtonIsDisabled) {
        // Part D: Debug the following block of if code
        if(logNumber > maxLogs) {
            document.getElementById("errorMsg").innerText  = "Clear some logs before proceeding";
        }
        // End debugging task Part D

        else {
            const bulb = document.getElementById('bulb');
            // Part A: Add code below
            //
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
    // End of Part B
}