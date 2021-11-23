const EventEmitter = require('events');

// if you want to create something custom you need to extend the class

const customEmitter = new EventEmitter()

//the order between .on and .emit matters:
customEmitter.on('response', (name, id)=> {
    console.log(`data received ${name} with id: ${id}`)
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)