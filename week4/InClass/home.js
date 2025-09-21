// console.log("home.js hello");

// Document Object Model (DOM) - tree data structure

let greeting = document.getElementById("greeting");
//Element object

console.log(greeting.innerText);
console.log(greeting.innerHTML);
console.log(greeting.textContent);

// Task (5mins)
// Retrieve all instances of <p>
// Display (loop) each <p>'s innerText in the console

let paras = document.getElementsByTagName("p");

// for (let i = 0; i<paras.length; i++){
//     console.log(paras[i].innerText);
// }

for (const para of paras) {
    // console.log(para.innerText);

    // Replace the innerText value with "Supreme Leader"
    para.innerText = "Supreme Leader"; 
    console.log(para.innerText);
}


