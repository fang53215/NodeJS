function pet(words){
	this.words = words;
	this.speak = function(){
		console.log(this.words)
	}
}

function dog(words){
	pet.call(this,words)
	//pet.apply(this,arguments)
}

var dogs = new dog('www')

dogs.speak()