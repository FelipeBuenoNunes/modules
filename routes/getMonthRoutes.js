const getMonth = require("../modules/month");

module.exports = app => {
    app.get('/mes', (req, res) => {
        const mes = req.query.mes;
        const result = getMonth(mes);

        res.json(result);
    });
}