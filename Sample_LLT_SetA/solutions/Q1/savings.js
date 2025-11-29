/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2022

*/

function calculate() {

     var amt = Number(document.getElementById("myAmt").value)
     var interest = parseFloat(document.getElementById("myInterest").value)
     var goal = Number(document.getElementById("myGoal").value)


     if (isNaN(interest)) {
          interest = 0
     }

     var calculated_amount = amt
     var year_counter = 0


     if ((amt == 0) || (amt < 0)) {
          year_counter = '-'
          var tmp_amt = 0
          amount_received = parseFloat(tmp_amt).toFixed(2)
     }
     else if ((interest == 0) || (interest < 0)) {
          year_counter = '-'
          amount_received = parseFloat(amt).toFixed(2)
     }
     else if ((goal == 0) || (goal < 0)) {
          year_counter = '-'
          amount_received = parseFloat(amt).toFixed(2);
     }
     else {
          while (calculated_amount < goal) {
               calculated_amount += calculated_amount * (interest / 100)
               year_counter++

               console.log(calculated_amount)
               console.log(year_counter)
          }

          var amount_received = parseFloat(calculated_amount).toFixed(2)

     }

     // Create the result container
     const resultDiv = document.getElementById("result");

     // Clear existing content
     resultDiv.innerHTML = "";

     // Create heading
     const heading = document.createElement("h4");
     heading.className = "text-success";
     heading.style.marginBottom = "20px";
     heading.style.marginTop = "30px";
     heading.textContent = "Result";
     resultDiv.appendChild(heading);

     // Create table
     const table = document.createElement("table");
     table.className = "table table-bordered";
     table.style.width = "500px";

     // Create first row
     const row1 = document.createElement("tr");
     const th1 = document.createElement("th");
     th1.textContent = "You will achieve your goal in (years):";
     const td1 = document.createElement("td");
     td1.textContent = year_counter;
     row1.appendChild(th1);
     row1.appendChild(td1);
     table.appendChild(row1);

     // Create second row
     const row2 = document.createElement("tr");
     const th2 = document.createElement("th");
     th2.textContent = "You will get ($):";
     const td2 = document.createElement("td");
     td2.textContent = amount_received;
     row2.appendChild(th2);
     row2.appendChild(td2);
     table.appendChild(row2);

     resultDiv.appendChild(table);


}
