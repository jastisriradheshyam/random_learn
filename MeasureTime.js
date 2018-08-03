// for node.js
// Way One ----------------------
var hrTime1 = process.hrtime();
// code
var hrTime1 = process.hrtime();
startP = hrTime[0] * 1000000 + hrTime[1] / 1000;
endP = hrTime1[0] * 1000000 + hrTime1[1] / 1000;
// Shows the time difference in micro second
console.log(endP - startP);

// Way Two ----------------------
const start = process.hrtime();
// Code
const end = process.hrtime(start);
// Shows time in nano seconds
console.log("\n%d nanoseconds", end[1]);
