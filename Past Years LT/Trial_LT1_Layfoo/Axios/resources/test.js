// Do NOT edit
function __printError(errStr) {
   console.err(errStr);
   document.querySelector("#__adminOutput").innerText = errStr;
}

// Do NOT edit
function __print(str) {
   console.log(str);
   document.querySelector("#__adminOutput").innerText += str;
}

// Do NOT edit
async function __btnResetClick() {
   __resetData(true);
   window.location = "./";
}

// Do NOT edit
async function __resetData(verbose = false) {
   const __adminOutput = document.querySelector("#__adminOutput");
   try {
      let response = await fetch('./api/reset.php')
      if (!response.ok) {
         __printError(`{"status":"failure", "error": "${response.status}" }`);
      }
      let data = await response.json();

      if (verbose) {
         console.log(data);
         __adminOutput.innerText = JSON.stringify(data);
      }
   } catch (error) {
      // console.error('Error:', error);
      __printError(`{"status":"failure", "error": "${error}" }`);
   };
}

// Do NOT edit
async function __getData() {
   try {
      let response = await fetch('./api/data.json')
      if (!response.ok) {
         __printError(`{"getData()":"failure", "error": "${response.status}" }`);
         return false;
      }

      let data = await response.json();
      // console.log(data);
      return data;

   } catch (error) {
      __printError(`{"getData()":"failure", "error": "${error}" }`);
   };

}

// Do NOT edit
async function __sleep() {
   // wait 1 secs
   await new Promise(r => setTimeout(r, 1000));
}

// Do NOT edit
async function __runTests() {
   let numTests = 0;
   let numPass = 0;
   __print("Reset data...\n");

   __resetData();
   __sleep();

   const data = {
      "fruits": [{ "name": "Pack of 4 apples", "price": 3.95 },
      { "name": "Pack of 3 oranges", "price": 5.15 }],
      "drinks": [{ "name": "100 Plus", "price": 1.5 }, { "name": "Coke Zero", "price": 1.8 },
      { "name": "Coke", "price": 1.7 }]
   };
   // console.log(`runTests: ${JSON.stringify(data)}`);
   let categories = Object.keys(data);

   {
      let testTitle = `=== Test ${++numTests}: Check categories dropdown ===`;

      let expected = categories;

      let actual = [];
      for (let option of document.querySelectorAll("#category option")) {
         let val = option.value;
         if (val === "") continue;
         actual.push(val);
      }

      let pass = expected.length === actual.length && expected.every(element => actual.includes(element));

      __print(`${testTitle}
         Expected: [${expected.join(",")}]
         Actual  : [${actual.join(",")}]
         ${pass ? 'PASS' : 'FAIL'}

      `);
      numPass += pass ? 1 : 0;
   }

   {
      let testTitle = `=== Test ${++numTests}: Check when no category is selected ===`;

      const categorySelect= document.querySelector("#category");
      categorySelect.value = "";
      categorySelect.dispatchEvent(new Event('change'));

      await __sleep();

      let expected = "Select a product category.";

      let outputDiv = document.querySelector("#output");
      let actual = outputDiv.textContent.trim();
      let actualNumOfChildren = outputDiv.childNodes.length;

      let pass = actual.includes(expected) && actualNumOfChildren === 1;

      __print(`${testTitle}
         Inspect div with id "output" 
         Expected: 1 child node "${expected}"
         Actual  :${actualNumOfChildren} child node "${actual}"
         ${pass ? 'PASS' : 'FAIL'}

      `);
      numPass += pass ? 1 : 0;
   }

   {
      let testTitle = `=== Test ${++numTests}: Check table header contents ===`;

      let expected = ['name', 'price'];
      let actualStr = "";

      const categorySelect = document.querySelector("#category");
      let passCount = 0;
      for (let aCategory of categories) {
         categorySelect.value = aCategory;
         categorySelect.dispatchEvent(new Event('change'));

         await __sleep();

         let actual = [];
         for (let th of document.querySelectorAll("#output thead th")) {
            let val = th.innerText.toLowerCase();
            actual.push(val);
         }

         let pass = expected.length === actual.length && expected.every(element => actual.includes(element));
         if (pass) passCount++;
         actualStr += `"${aCategory}" : [${actual.join(",")}], `;
      }
      let pass = passCount === categories.length;

      __print(`${testTitle}
         Expected: [${expected.join(",")}]
         Actual  : ${actualStr}
         ${pass ? 'PASS' : 'FAIL'}

      `);
      numPass += pass ? 1 : 0;
   }

   
   {
      let testTitle = `=== Test ${++numTests}: Check table styling ===`;

      let expected = ['table', 'table-primary', 'table-striped'];
      let actualStr = "";

      const categorySelect = document.querySelector("#category");
      let passCount = 0;
      for (let aCategory of categories) {
         categorySelect.value = aCategory;
         categorySelect.dispatchEvent(new Event('change'));

         await __sleep();

         let actual = [];
         const table = document.querySelector("#output table");
         if (table) actual = table.className;

         let pass = expected.every(element => actual.includes(element));
         if (pass) passCount++;
         actualStr += `"${aCategory}" : [${actual}], `;
      }
      let pass = passCount === categories.length;

      __print(`${testTitle}
         Expected: [${expected.join(" ")}]
         Actual  : ${actualStr}
         ${pass ? 'PASS' : 'FAIL'}

      `);
      numPass += pass ? 1 : 0;
   }

   {
      let testTitle = `=== Test ${++numTests}: Check table has all products ===`;

      const categorySelect = document.querySelector("#category");
      let pass = true;
      let expectedStr = "";
      let actualStr = "";

      for (let aCategory of categories) {
         categorySelect.value = aCategory;
         categorySelect.dispatchEvent(new Event('change'));

         await __sleep();

         let tbody = document.querySelector("#output tbody");
         let actual = tbody ? tbody.textContent : "not found";

         let expected = "";
         for (let product of data[aCategory]) {
            let productStr = `${product.name}${product.price}`;
            expected += productStr;

            pass = pass && actual.includes(productStr);
         }

         expectedStr += `"${aCategory}": "${expected}", `;
         actualStr += `"${aCategory}": "${actual}", `;
      }

      __print(`${testTitle}
         Expected: ${expectedStr}
         Actual  : ${actualStr}
         ${pass ? 'PASS' : 'FAIL'}

      `);
      numPass += pass ? 1 : 0;
   }


   {
      let testTitle = "[[[Test Set: Add new products]]]";

      const categorySelect = document.querySelector("#category");
      const nameInput = document.querySelector("#nameInput");
      const priceInput = document.querySelector("#priceInput");
      const btnAdd = document.querySelector("#btnAdd");

      let testDataSet = [
         { "category": "fruits", "name": "Papaya", "price": 7.1 },
         { "category": "drinks", "name": "Orange Juice", "price": 1.55 },
      ];


      // check 1: new product is in datastore
      let check1Results = "";
      let check1NumPass = 0;

      // check 2: form cleared
      let check2Results = "";
      let check2NumPass = 0;

      // check 3: table has new product
      let check3Results = "";
      let check3NumPass = 0;

      for (let testData of testDataSet) {
         categorySelect.value = testData.category;
         nameInput.value = testData.name;
         priceInput.value = Number.parseFloat(testData.price);
         btnAdd.click();

         await __sleep();

         let newData = await __getData();

         // check 1: new product is in datastore
         {
            let check1Err = false;
            if (!newData[testData.category]) {
               check1Err = `
               Error: "${testData.category}" not found.  
               Actual: ${Object.keys(newData)}
            `
            }
            else {
               let actualProducts = JSON.stringify(newData[testData.category]);
               let newProduct = JSON.stringify({ "name": testData.name, "price": testData.price });
               if (!actualProducts.includes(newProduct)) {
                  check1Err = `
                  Error: "${newProduct}" not found.
                  Actual: ${actualProducts}
               `
               }
            }

            check1NumPass += check1Err === false ? 1 : 0
            check1Results += `Check 1: Check ${JSON.stringify(testData)} is in datastore
               ${check1Err === false ? 'New product found' : check1Err}
            `;
         }

         // check 2: form cleared
         {
            let results = "Error: 1 or both fields are not cleared"
            if (nameInput.value === '' && priceInput.value === '') {
               check2NumPass++;
               results = "Fields are cleared";
            }
            check2Results += `Check 2: Name and price text fields are cleared.
               Actual:  Name field: "${nameInput.value}", Price field: "${priceInput.value}"
               ${results}
            `
         }

         // check 3: table has new product
         {
            let tbody = document.querySelector("#output tbody");
            let actual = tbody ? tbody.textContent : "not found";

            let productStr = `${testData.name}${testData.price}`;
            let found = actual.includes(productStr);

            check3Results += `Check 3: Is ${productStr} in the table?
               Actual: ${actual}
               ${found ? "Found" : "Not found"}
            `;
            check3NumPass += found ? 1 : 0;
         }
      }

      __print(`${testTitle}
         === Test ${++numTests}: Datastore has new product ===
         ${check1Results}
         ${check1NumPass === testDataSet.length ? "PASS" : "FAIL"} 

         === Test ${++numTests}: Form cleared after add ===
         ${check2Results}
         ${check2NumPass === testDataSet.length ? "PASS" : "FAIL"} 

         === Test ${++numTests}: Table has new product ===
         ${check3Results}
         ${check2NumPass === testDataSet.length ? "PASS" : "FAIL"} 

      `);
      numPass += check1NumPass / testDataSet.length;
      numPass += check2NumPass / testDataSet.length;
      numPass += check3NumPass / testDataSet.length;
   }

   document.querySelector("#numPass").innerText = numPass;
   document.querySelector("#numTests").innerText = numTests;
   let score = numPass / numTests * 100;
   document.querySelector("#score").innerText = score.toFixed(2);
   console.log(`Score: ${score}%; ${numPass} out of ${numTests}`)
}
// Do NOT edit
