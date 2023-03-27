const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of the note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of the note',
      demand: true,
      alias: 'b'
    }
  })
  .help()
  .argv;

const notes = [];

if (argv._[0] === 'add') {
  const note = {
    title: argv.title,
    body: argv.body
  };
  notes.push(note);
  const notesString = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesString);
}
