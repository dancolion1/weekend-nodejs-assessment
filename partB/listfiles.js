const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const argv = yargs
  .option('dir', {
    alias: 'd',
    type: 'string',
    description: 'the directory to search for files',
    demandOption: true,
  })
  .option('ext', {
    alias: 'e',
    type: 'string',
    description: 'the file extension to filter for',
    demandOption: true,
  })
  .help().argv;

const { dir, ext } = argv;

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const filteredFiles = files.filter((file) =>
    path.extname(file).toLowerCase() === ext.toLowerCase()
  );

  console.log(`Files with extension "${ext}" in directory "${dir}":`);
  filteredFiles.forEach((file) => console.log(file));
});
