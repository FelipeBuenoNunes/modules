const fs = require('fs');

module.exports = function getFile(){
    const x = fs.readFileSync('./employees.json');
    
    return JSON.parse(x.toString());
}