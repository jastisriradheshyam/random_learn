/*
Usage:
-------------------------------------------------
var syn_timeout = require('synchronous_timeout');
//some code
await syn_timeout.pause(300);
//some code
-------------------------------------------------
  if defined and used in a same file:
-------------------------------------------------
//some code
await pause(300);
//some code
-------------------------------------------------
*/

var pause = async function (milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

exports.pause = pause;

/*
Credits: Nathan
Site: https://stackoverflow.com/questions/4122268/using-settimeout-synchronously-in-javascript
*/


const wait = ms => new Promise(r => setTimeout(r, ms));
exports.wait = wait;