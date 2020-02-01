const http = require('http');

//Si se conecta desde el navegador tenemos respuestalog
/** 
const server = http.createServer();

server.on('connection', (socket)=>{
    console.log('Nueva conexion Detectada')
})
server.listen(2012)
console.log('Escuchando en el puerto 2012');
*/

// si se conecta a la url indicada  responde un el html
/** 
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('HOla mundo desde node.js');
        res.write('Viva mmmmexico');
        res.end();
    }
    //creas otro path usando en mismo puerto  te responde otra caracteristica desde el html 
    if (req.url === '/coches') {
        res.write('coche1');
        res.end();
        
    }
});
//El puerto en el que quiero que escuhe nuestro ordenador 
server.listen(3030)
console.log('Escuchando en puerto 3030......')

*/
//respuesta de un erro con un  html 
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content.type' : 'tex/html'});
    res.write('<h1>Hola a todosssss :( :))) </h1>');
    res.write('<p>Mi Web de coche +-+-+-+- </p>');
    res.end();
}).listen(5555);


