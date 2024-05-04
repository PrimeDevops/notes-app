 //const fs = require('fs');

/*fs.writeFileSync('notes.txt', 'my name is Charles');

fs.appendFileSync('notes.txt', " , i'm a software developer ") */

/* const get = require('./notes.js')

const msg = get()

console.log(msg);

const add = require('./utils.js');
const getNotes = require('./notes.js');


const sum = add(5, 6);

console.log(sum); */

/* const validator = require('validator');
const chalk = require('chalk'); */


/* const msg = chalk.yellow('Howdy...')
console.log(msg); */

/* 
console.log(chalk.bold.blue.inverse('SUCCESSFUL...'));
console.log(chalk.bold.red.inverse('ERROR...')); */

//console.log(validator.isEmail('@example.com'))
//console.log(validator.isURL('https://google.com'))


//console.log(process.argv[1]);     // argv - argument vector 

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


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
    handler: function(argv){
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
    handler: function(argv){
        // console.log('remove the note..')
        notes.removeNote(argv.title)

    }
})

// create a list command
yargs.command({
    command: 'list',
    describe: 'add a list..',
    handler: function(){
        console.log('listing out all note..')
    }
})

// create a read command
yargs.command({
    command: 'read',
    describe: 'read an item..',
    handler: function(){
        console.log('reading a note..')
    }
})

// add, remove, read, list


console.log(yargs.argv)
        // OR 
//yargs.parse()