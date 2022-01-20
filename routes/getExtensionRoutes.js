const getExtension = require("../modules/extension");

module.exports = app => {
    app.get('/extension', (req, res) =>{
        res.json(getExtension());
    });
}