const  getNotes =  require('./notes.js')
const yargs = require('yargs')
const chalk = require ('chalk')


//customize yargs version
yargs.version('1.1.0')

//create add command 
yargs.command({

    command: 'add',
    describe: 'add  note',
    builder: {
        title: { 
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        } 
    },      body: {
               describe: 'note body',
               demandOption: true,
               type: 'string'

    },
    handler: function (argv) {
        console.log('Title: ' + argv.title )
        console.log('Body:  ' + argv.body )
    }
})

//Create Remove Command 
yargs.command({
     command: 'remove',
    describe: 'remove a  note',
    handler: function () {
    console.log('removing a note')
    }
})
//create List command
yargs.command({
     command: 'List',
    describe: 'List  a  note',
    handler: function () {
    console.log('Listing notes')
    }
})

//create read command
yargs.command({
     command: 'Read',
    describe: 'Read  a  note',
    handler: function () {
    console.log('reading a note')
    }
})


//add, remove, read, list
console.log(yargs.argv)

//yargs.parse()
        





