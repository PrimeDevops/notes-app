const fs = require('fs')
const chalk = require('chalk')


/* const getNotes = ()=>{    // ref -> exports
    return "your notes...."
} */

const add_Note = (title, body)=> {
    const notes = loadNotes()

    /* const duplicateNotes = notes.filter(function(note){
        return note.title === title

    }) */
    //const duplicateNotes = notes.filter((note)=> note.title === title) // shorthand syntax
    const duplicateNote = notes.find((note) => note.title === title)
        //return note.title === title

        /* 
        USED TO DEBUG
        console.log(duplicateNote)
        console.log(title) */

        //debugger

    //if (duplicateNotes.length === 0){
        if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        //console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added..'))
    }else{
        console.log(chalk.red.inverse('Note title is taken...'))
    }

    /* notes.push({
        title: title,`
        body: body
    })
    //console.log(notes)
    saveNotes(notes) */
}
const removeNote = (title)=>{
   // console.log(title)
   const notes = loadNotes()
   /* const notesToKeep = notes.filter(function(notes){
    return notes.title !== title
   }) */
   const notesToKeep = notes.filter((notes)=> notes.title !== title)
   
   if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note removed...'))
    saveNotes(notesToKeep)
   }else{
    console.log(chalk.red.inverse('No Note found...'))
   }
 
   //saveNotes(notesToKeep)

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.green.inverse('your notes...'))

    notes.forEach((note)=>{
        console.log(note.title)
    })

}

const readNote = (title)=>{
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }else{
        console.log(chalk.red.inverse('Note not found...'))

    }

}


const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    //console.log(saveNotes);

}


const loadNotes = ()=> {
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return[]

    }
    

}


module.exports = {
    //getNotes: getNotes,
    add_Note: add_Note,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
