const fs = require('fs');
const filePath = './text.txt';

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
