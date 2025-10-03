/*
    Name:   YOUR NAME GOES HERE (LEE Oppa)
    Email:  YOUR SMU EMAIL ID GOES HERE (lee.oppa.2020)
*/

const API_URL = "api/info.php";

/* DO NOT CHANGE THIS FUNCTION's NAME */
function display_default() {

    console.log("===[START] display_default() ===")


    // Part A
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH
    axios
    .get(API_URL)
    .then(response => {
        console.log(response.data);

        for (data of response.data.military_statistics){
            console.log(data)
        }
    })
    .catch(error => {
        console.log(error.message);
    })

    
    console.log("===[END] display_default() ===")

}
