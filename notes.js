const fs = require('fs')
const chalk = require('chalk')


const getNotes = function (){
    return "your notes...."
}

const add_Note =  function(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title

    })
    if (duplicateNotes.length === 0){
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
const removeNote = function(title){
   // console.log(title)
   const notes = loadNotes()
   const notesToKeep = notes.filter(function(notes){
    return notes.title !== title
   })
   if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('Note removed...'))
    saveNotes(notesToKeep)
   }else{
    console.log(chalk.red.inverse('No Note found...'))
   }

   //saveNotes(notesToKeep)

}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}


const loadNotes = function(){
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return[]

    }
    

}


module.exports = {
    getNotes: getNotes,
    add_Note: add_Note,
    removeNote: removeNote
}
