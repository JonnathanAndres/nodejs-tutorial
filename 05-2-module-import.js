const names = require('./04-names') // alternative: deconstruct > const {john, peter} = require('./04-names')
const sayHi = require('./05-utils')
//console.log(names)

sayHi('Jonnathan')
sayHi(names.john)
sayHi(names.peter)
