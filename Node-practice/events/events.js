var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

//addEventListener

function water(who){
	console.log('to ' + who + ' water')
}

life.on('aaa',water)
/*life.on('aaa',function(who){
	console.log('to ' + who + ' water')
})*/
life.on('aaa',function(who){
	console.log('to ' + who + ' clean')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 3')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 4')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 5')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 6')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 7')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 8')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 9')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 10')
})
life.on('aaa',function(who){
	console.log('to ' + who + ' 11')
})


life.on('bbb',function(who){
	console.log('to ' + who + ' buy')
})


life.removeListener('aaa',water)
life.removeAllListeners('aaa')


var hasAListener = life.emit('aaa','Alice')
var hasBListener = life.emit('bbb','Girl')
var hasCListener = life.emit('ccc','Mens')

console.log(life.listeners('aaa').length)
console.log(life.listeners('bbb').length)
console.log(EventEmitter.listenerCount(life,'aaa'))

console.log(hasAListener)
console.log(hasBListener)
console.log(hasCListener)