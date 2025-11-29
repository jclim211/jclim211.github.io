// Do NOT edit
function unitTest(sort, data, expected) {
   let dataStr = JSON.stringify(data);
   let actual = "ERROR";

   try {
      sort(data);
      actual = JSON.stringify(data);
   } catch (error) {
      // do nothing
   }
   return {
      data: dataStr,
      expected: expected,
      actual: actual,
      pass: expected === actual
   }
}

let runTests = (sort) => {
   let log = [`Running tests... ${Date()}`];
   let total = 0;
   let testCount = 0;


   {
      testCount++;
      let data = ["C7", "C5", "C2", "C8"];
      let expected = JSON.stringify(["C8", "C7", "C5", "C2"]);

      let testResult = unitTest(sort, data, expected);

      total += testResult.pass ? 1 : 0;
      log.push(`Test ${testCount}: Same suit
         Data: ${testResult.data}
         Expected: ${testResult.expected}
         Actual: ${testResult.actual}
         ${testResult.pass ? "PASS" : "FAIL"}`);
   }


   {
      testCount++;
      let data = ["C4", "H3", "D2", "S2"];
      let expected = JSON.stringify(["S2", "H3", "D2", "C4"]);

      let testResult = unitTest(sort, data, expected);

      total += testResult.pass ? 1 : 0;
      log.push(`Test ${testCount}: One of each suit
         Data: ${testResult.data}
         Expected: ${testResult.expected}
         Actual: ${testResult.actual}
         ${testResult.pass ? "PASS" : "FAIL"}`);
   }

   {
      testCount++;
      let data = ["H3", "C4", "D2", "C4", "H3", "D2", "S2", "S2", "C4", ];
      let expected = JSON.stringify(["S2", "S2", "H3", "H3", "D2", "D2", "C4", "C4", "C4",]);

      let testResult = unitTest(sort, data, expected);

      total += testResult.pass ? 1 : 0;
      log.push(`Test ${testCount}: Duplicates
         Data: ${testResult.data}
         Expected: ${testResult.expected}
         Actual: ${testResult.actual}
         ${testResult.pass ? "PASS" : "FAIL"}`);
   }

   {
      testCount++;
      let data = ["S9", "S10", "SJ", "SQ", "SK", "SA"];
      let expected = JSON.stringify(["SA", "SK", "SQ", "SJ", "S10", "S9"]);

      let testResult = unitTest(sort, data, expected);

      total += testResult.pass ? 1 : 0;
      log.push(`Test ${testCount}: Higher values 
         Data: ${testResult.data}
         Expected: ${testResult.expected}
         Actual: ${testResult.actual}
         ${testResult.pass ? "PASS" : "FAIL"}`);
   }

   {
      testCount++;
      let data = ["C7", "D8", "H9", "S10", "H5", "SJ", "H9", "HQ", "D8", "DK", "CA"];
      let expected = JSON.stringify(["SJ", "S10", "HQ", "H9", "H9", "H5", "DK", "D8", "D8", "CA", "C7",]);

      let testResult = unitTest(sort, data, expected);

      total += testResult.pass ? 1 : 0;
      log.push(`Test ${testCount}: A mixture
         Data: ${testResult.data}
         Expected: ${testResult.expected}
         Actual: ${testResult.actual}
         ${testResult.pass ? "PASS" : "FAIL"}`);
   }

   log.push(`TOTAL: ${total} out of ${testCount}`);

   return log;
};

export default runTests;