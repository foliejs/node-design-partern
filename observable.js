// 观察者模式

const util = requre('util')  
const EventEmitter = require('events').EventEmitter

function MyFancyObservable() {  
  EventEmitter.call(this)
}

util.inherits(MyFancyObservable, EventEmitter)

MyFancyObservable.prototype.hello = function (name) {
  this.emit('hello', 'name')
} 

var observable = new MyFancyObservable()

observable.on('hello', function (name) {  
  console.log(name)
})

observable.hello('john') 
