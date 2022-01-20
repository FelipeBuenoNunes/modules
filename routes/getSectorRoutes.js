const getSector = require("../modules/sector");

module.exports = app => {
    app.get('/setor', (req, res) => {
        const sector = req.query.setor;

        const result = getSector(sector);
        
        res.json(result);
    });
}