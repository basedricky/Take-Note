const fs = require("fs");

module.exports = (app) => {
    //* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });


    app.post('/api/notes', (req, res) => {


    });
};