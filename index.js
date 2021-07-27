var fs = require("fs");
var parse = require("csv-parse");
const path = require("path");
var md5 = require('md5');

var csvData = [];
var string = "";
 fs.createReadStream(path.join(__dirname, "annual-enterprise-survey-2020-financial-year-provisional-csv.csv"))
 .pipe(parse({ delimiter: "," }))
  .on("data", function (csvrow) {
    csvData.push(csvrow);
  })
  .on("end", function () {
    csvData = csvData.slice(1);
    //console.log(csvData);
    for (let i = 0; i < csvData.length; i+=2) {
      //console.log(csvData[i]);
      string+=csvData[i][2];
      //console.log(string)
    }
    console.log(md5(string))
  });
