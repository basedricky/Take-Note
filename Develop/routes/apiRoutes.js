const fs = require("fs");
const path = require('path');
const uniqid = require('uniqid');

module.exports = (app) => {
    //* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });


    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        console.log(req.body);
        newNote.id = uniqid();
        noteList.push(newNote);
        updateData();
        console.log("Added new note!")

    });

    function updateData() {
        fs.writeFile("db/db.json", JSON.stringify(noteList, '\t'), err => {
            if (err) throw err;
            return true;
        });
    }
};


