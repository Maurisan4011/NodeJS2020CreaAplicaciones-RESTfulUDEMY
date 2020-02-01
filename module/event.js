const EventEmitter = require('events');

//Importar  desde la documentacion 
const emitter = new EventEmitter();




//normal 
emitter.on('event', function () {
    console.log('Un evento ha ocurrido.....')
    
})
emitter.emit('event');

//Emitter con argumento 
emitter.on('eventWhiteArgument', function (arg) {
    console.log('Un evento con los siguientes argumentos ah  ocurrido: ' + arg.id + ' ' + arg.numero)
    
})
emitter.emit('eventWhiteArgument',{id: 1, numero: 24})

// Emitter con funciones de flecha  EMITTER CON ARGUMENTO 
emitter.on('eventArrow', (arg) => {
    console.log('Un evento FLECHA con los siguientes argumentos ah  ocurrido: ' + arg.id + ' ' + arg.numero)

})
emitter.emit('eventArrow', { id: 1, numero: 24 })