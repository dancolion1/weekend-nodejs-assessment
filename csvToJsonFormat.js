const fs = require('fs');
const csv = require('csvtojson');

const csvFilePath = './data.csv';

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    const jsonString = JSON.stringify(jsonObj);
    fs.writeFileSync('data.json', jsonString);
  });
