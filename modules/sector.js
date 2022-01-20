const getFile = require("../getJson/getFile")

module.exports = function getSector(sector){
    const all = getFile();

    const arrFilter = all.filter(elem => elem["sector"] === sector);

    return arrFilter;
}