// DO NOT EDIT
function __wad2TestDetailsToString(testDetails) {
   return `Div ${testDetails.div} -- ${testDetails.result}:  Expected: ${testDetails.expected}, Actual: ${testDetails.actual}`;
}

document.getElementById('btnTest').addEventListener("click", function (event) {
   const body = document.body;
   const newItem = document.getElementById("newItem");
   const btnAdd = document.getElementById("btnAdd");
   const row = document.getElementById("row");

   // clear row's children
   while (row.firstChild) {
      row.removeChild(row.firstChild);
   }


   // create a col div in output to show test results
   let testContainer = body.appendChild(document.createElement("div"));
   testContainer.className = "container-fluid";
   let testRow = testContainer.appendChild(document.createElement("div"));
   testRow.className = "row";

   let testCol;
   for (let i = 0; i < 3; i++) {
      testCol = testRow.appendChild(document.createElement("div"));
      testCol.className = "col";
   }
   const expColWidth = testCol.clientWidth;

   // remove the test container from the document
   body.removeChild(testContainer);

   // simulate button clicks to add items
   const testValues = ["Apple", "Banana", "Cherry", "Durian", "Eggplant", "Fig"];
   for (let value of testValues) {
      newItem.value = value;
      btnAdd.click();
   }

   // check the results
   const bgColors = ["bg-primary", "bg-secondary", "bg-success", "bg-info"];
   const cols = row.getElementsByTagName("div");

   let bgChecks = {
      count: 0,
      details: []
   };
   let textChecks = {
      count: 0,
      details: []
   };
   let widthChecks = {
      count: 0,
      details: []
   };


   if(! cols || cols.length === 0) {
      console.error("No divs found inside the row.");
      return;
   }
   
   for (let i = 0; i < cols.length; i++) {
      try {

         const col = cols[i];
         let divIndex = i + 1;


         // check background color class
         let expBgColor = bgColors[i % bgColors.length];
         let testDetails = {
            div: divIndex,
            expected: expBgColor,
            actual: col.className,
            result: "PASS"
         }
         if (col.classList.contains(expBgColor)) bgChecks.count++;
         else testDetails.result = "FAIL";
         bgChecks.details.push(testDetails);


         // check text value
         testDetails = {
            div: divIndex,
            expected: testValues[i],
            actual: col.textContent,
            result: "PASS"
         }
         if (col.textContent === testValues[i]) textChecks.count++;
         else testDetails.result = "FAIL";
         textChecks.details.push(testDetails);


         // check width
         testDetails = {
            div: divIndex,
            expected: expColWidth + "px",
            actual: col.clientWidth + "px",
            result: "PASS"
         }
         if (col.clientWidth === expColWidth) widthChecks.count++;
         else testDetails.result = "FAIL";
         widthChecks.details.push(testDetails);

      } catch (error) {
         console.error(`Error testing div ${i + 1}: ${error}`);
      }
   }

   // summarize results
   let numPassed = 0;
   let numTests = 0;
   let outputArr = [];
   let pass;

   // all columns' background color is worth 1 mark or 0 marks
   numTests ++;
   pass = bgChecks.count === testValues.length;
   outputArr.push(`Test 1: Correct background color -- ${pass ? "PASS" : "FAIL"}`);
   if (pass) numPassed++;
   for (let details of bgChecks.details) {
      outputArr.push(__wad2TestDetailsToString(details));
   }
   outputArr.push("\n");

   // all columns' text is worth 1 mark or 0 marks
   numTests ++;
   pass = textChecks.count === testValues.length;
   outputArr.push(`Test 2: Correct text value -- ${pass ? "PASS" : "FAIL"}`);
   if (pass) numPassed++;
   for (let details of textChecks.details) {
      outputArr.push(__wad2TestDetailsToString(details));
   }
   outputArr.push("\n");

   // all columns' text is worth 1 mark or 0 marks
   numTests ++;
   pass = widthChecks.count === testValues.length;
   outputArr.push(`Test 3: Correct column width -- ${pass ? "PASS" : "FAIL"}`);
   if (pass) numPassed++;
   for (let details of widthChecks.details) {
      outputArr.push(__wad2TestDetailsToString(details));
   }

   // final score

   console.log(outputArr.join("\n"));
   console.log(`Score: ${numPassed} out of ${numTests}`);


   const output = document.getElementById("output");
   output.innerText = outputArr.join("\n");
   document.getElementById("score").innerText = numPassed;
   document.getElementById("numTests").innerText = numTests;

});