//var start = new Date(2020,22,01);
//var end = new Date(2020,22,18);

//MAnera correcta de usar un paquete de npm
const d3 = require('d3-time')

var start = new Date(2020, 02, 01);
var end = new Date(2020, 03, 01);

var miliSegundnosDia= 24*60*60*1000;

var resultado = (end-start)/miliSegundnosDia;
console.log(resultado);

//lo que vamos a ver usando la libreria instalada
resultado = d3.timeDay.count(start, end);
console.log(resultado)
