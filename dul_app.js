const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./dul_notes.js');


// customise yargs version 
yargs.version('1.1.0')


// create add command 
yargs.command({
    command: 'add', 
    describe: 'add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv){
        /* console.log('Title: ' + argv.title)
        console.log('body:' + argv.body) */
        //console.log('Adding a new note!', argv);
        notes.add_Note(argv.title, argv.body)
    
    }
    
})

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'remove a line of code',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log('remove the note..')
        notes.removeNote(argv.title)

    }
})

// create a list command
yargs.command({
    command: 'list',
    describe: 'add a list..',
    handler (){
        notes.listNotes()
        //console.log('listing out all note..')
    }
})

// create a read command
yargs.command({
    command: 'read',
    describe: 'read an item..',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('reading a note..')
        notes.readNote(argv.title)
    }
})

// add, remove, read, list


//console.log(yargs.argv)
        // OR 
yargs.parse()