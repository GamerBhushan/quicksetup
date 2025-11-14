"use strict";

var _fs = require("fs");

var filePath = "MyFiles/data.json";
var obj = {
  name: "<YOUR-NAME-HERE>",
  div: "A",
  rollNo: 25,
  "class": "SYMCA",
  languages: ["JavaScript", "Java", "Python", "C", "C++"]
}; // Synchronouse Way

console.log("Synchronous Way\n");

try {
  (0, _fs.writeFileSync)(filePath, JSON.stringify(obj));
  console.log("File Written Successfully.");
  var data = (0, _fs.readFileSync)(filePath).toString();
  console.log("\nFile Data : \n");
  console.log(data);
} catch (error) {
  console.log("Error : ".concat(error));
} // Asynchronous Way


console.log("\n\nAsynchronouse Way\n\n");
(0, _fs.writeFile)(filePath, JSON.stringify(obj), "utf-8", function (err) {
  if (err) {
    console.log("Error While Writting File : ".concat(err));
  }

  console.log("\nData Written Successfully In File.\n");
});
(0, _fs.readFile)(filePath, function (err, data) {
  if (err) {
    return console.log("Error While Reading File : ".concat(err.message));
  }

  console.log("\nReading Data From File : \n".concat(data, "\n"));
});