const getFile = require("../getJson/getFile");

module.exports = () => {
    const newArr = [];
    
    getFile().forEach(elem => {
        newArr.push({"name": elem["name"], "extension": elem["extension"]});
    });

    newArr.sort(sortArr);

    return newArr;
}

const sortArr = (itemA, itemB) => {
    return itemA["name"] > itemB["name"] ? 1 : itemA["name"] < itemB["name"] ? -1 : 0;   
}