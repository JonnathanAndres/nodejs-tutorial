module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob'
}

module.exports.singlePerson = person;


// USAGE:
// const names = require('./04-names') // alternative: deconstruct > const {john, peter} = require('./04-names')
// const sayHi = require('./05-utils')
// //console.log(names)

// const data = require('./06-alternative-flavor')
// console.log(data)

// sayHi('Jonnathan')
// sayHi(names.john)
// sayHi(names.peter)
