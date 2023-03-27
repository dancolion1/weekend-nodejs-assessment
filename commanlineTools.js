const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
  .command('remove', 'Remove a note', {
    title: {
      describe: 'Title of the note to be removed',
      demand: true,
      alias: 't'
    }
  })
  .help()
  .argv;

const notes = JSON.parse(fs.readFileSync('notes.json'));

if (argv._[0] === 'remove') {
  const filteredNotes = notes.filter(note => note.title !== argv.title);
  const notesString = JSON.stringify(filteredNotes);
  fs.writeFileSync('notes.json', notesString);
}
