/*
    Name: LIM Jie Ching
    Email: jc.lim.2024
*/


/*

Do not modify q2.html

Add an event listener to the button such that

when the user clicks on it, a browser alert will pop up with "Booyah!!!"

*/

const myButton = document.getElementById("hello");
let someString = "Booyah!!!";

myButton.addEventListener("click", () => {
  window.alert(someString)
});

console.log(someString); // Expected Value: 'Data' (will never output 'Data Again')