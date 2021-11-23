const EventEmitter = require('events');

// if you want to create something custom you need to extend the class

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=> {
    console.log(`data received`)
})

customEmitter.emit('response')