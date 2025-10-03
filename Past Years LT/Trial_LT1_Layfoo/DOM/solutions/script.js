// Your answer goes here.

btnAdd.addEventListener("click", function (event) {
   const newItem = document.getElementById("newItem");
   const btnAdd = document.getElementById("btnAdd");
   const row = document.getElementById("row");
   const bgColors = ["bg-primary", "bg-secondary", "bg-success", "bg-info"];

   let numCols = row.getElementsByTagName("div").length % bgColors.length;
   let col = row.appendChild(document.createElement("div"));
   col.appendChild(document.createTextNode(newItem.value));

   col.className = `col-4 ${bgColors[numCols]}`;

   newItem.value = "";
});