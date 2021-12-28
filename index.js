// "use strict";

// const {promises: {readFile}} = require("fs");

// readFile("test.txt").then(fileBuffer => {
//   console.log(fileBuffer.toString());
// }).catch(error => {
//   console.error(error.message);
//   process.exit(1);

//
// });
///d/d/drdser.dddza

//test
///d/d/drdser.dddcdcd
"use strict";

const { Console } = require("console");
const {promises: {readFile}} = require("fs");

Promise.all([
  readFile("test.txt"),
  readFile("test32.txt"),
  readFile("test3.txt")
]).then(([packageJson, readme, indexjs]) => {

    console.log("All Files readed")
  console.log(packageJson.toString());
  console.log(readme.toString());
  console.log(indexjs.toString());
}).catch(error => {
    console.log("Failed to read file !")
  console.error(error.message);
  process.exit(1);
});