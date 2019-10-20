// basic event emmitere
const event = require('events')
var myEmitter = new event.EventEmitter()
myEmitter.on('someEmmiter', function(msg1){
    console.log(`msg: ${msg1}`)
})
myEmitter.emit('someEmmiter', "I'm msg 1")
// advance event emmiters
const util = require('util')
var Person = function(name){
    this.name = name
}
util.inherits(Person, event.EventEmitter)
var bob = new Person('Bob')
var ada = new Person('Ada')
var rey = new Person('Rey')
var people = [bob, ada, rey]
people.forEach(function(person) {
    person.on('selfIntroduction', function() {
        console.log(`I am ${person.name}`)
    })
});
// begin self introduction
console.log('People start to introduction themselves')
people.forEach(function(p){
    p.emit('selfIntroduction')
})

