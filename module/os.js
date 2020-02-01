const os = require('os');
console.log('version SO', os.release());

console.log('MEmoria Libre', os.freemem());

console.log('Memoria total :', os.totalmem());