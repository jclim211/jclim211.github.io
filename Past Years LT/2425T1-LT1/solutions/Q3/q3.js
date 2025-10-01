/*
  NAME: Instructor or student name goes here
  EMAIL: inst@smu.edu.sg
*/
let logNumber = 0;
const maxLogs = 10;

function addLog(newLog) {
    const logBox = document.getElementById("logs");
    for(log of newLog) {
        // Part C: Solution of adding code task
        var newListItem = document.createElement('li');
        newListItem.appendChild(document.createTextNode(log));
        logBox.appendChild(newListItem);
        logNumber++;
        // End of Part C
    }
}

function halveLogs() {
    const logBox = document.getElementById("logs");
    const logItems = logBox.getElementsByTagName('li');

    // Part E: Solution of adding code task
    const logsToRemove = Math.floor(logNumber / 2);

    for (let i = 0; i < logsToRemove; i++) {
        logBox.removeChild(logItems[0]);
    }
    logNumber -= logsToRemove;
    if(logsToRemove > 0) {
        document.getElementById("errorMsg").innerText  = "";
    }
    else {
        document.getElementById("errorMsg").innerText  = "Not enough logs to remove";
    }
    // End of Part E
}

function changeColor() {
    const toggleButtonIsDisabled = document.getElementById('toggleButton').disabled;
    if (!toggleButtonIsDisabled) {
        // Part D: Solution to debugging the following block of if code
        if(logNumber > maxLogs - 3) { // change to maxLogs - 3
            document.getElementById("errorMsg").innerText  = "Clear some logs before proceeding";
        }
        // End debugging task Part D

        else {
            const bulb = document.getElementById('bulb');
            // Part A: Solution of adding code task
            bulb.style.fill = (bulb.style.fill == 'yellow') ? 'white' : 'yellow';
            // End of Part A

            // Part F: Solution of adding code task
            document.getElementById("errorMsg").innerText  = "";
            // End of Part F

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
    // Part B: Solution of adding code task
    document.getElementById('toggleButton').disabled = true;
    // Re-enable the button after the transition duration (1 seconds)
    setTimeout(() => {
        document.getElementById('toggleButton').disabled = false;
    }, 1000); 
    // End of Part B   
}