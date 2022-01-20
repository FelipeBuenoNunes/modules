const getFile = require("../getJson/getFile");


module.exports = function getMonth(month){
    const all = getFile();

    const arrFilter = Object.values(all).filter(elem => elem["birthDate"].split("/")[0] === month );

    return arrFilter;
}