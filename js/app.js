// //class Computer {
// 	constructor(brand, year, memory){
// 		this.brand = brand;
// 		this.year = year;
// 		this.memory = memory;

// 	}
// 	account(){
// 		console.log("one,two")
// 	}

//Create class Tamogotchi
class Tamogotchi {
	constructor(name, age){
	    this.name = name;
	    this.age = age;
	    this.hunger = 10;
	    this.sleepiness = 10;
	    this.boredom = 10;
	    const div = document.createElement('div');
	    div.id = name;
	    document.querySelector('body').appendChild(div);
	    const image = document.createElement('img');
	    image.src = "assets/bobic.jpg";
	    image.className ='tomogachi';
	    document.querySelector(`#${name}`).appendChild(image);
	}
	sing(){
	 	console.log("bla bla bla");
	}
	displayHunger() {
		document.querySelector('#hunger').innerHTML += (": " + this.hunger);
	}

    displaySleepines() {
		document.querySelector('#sleepy').innerHTML += (": " + this.sleepiness);
	}
	displayBoredom(){
		document.querySelector('#boring').innerHTML += (": " + this.boredom);
	}
}
     const bobick = new Tamogotchi("bobick", 5);



bobick.displayHunger();
bobick.displaySleepines();
bobick.displayBoredom();
bobick.sing();

// $('#hunger').on('click',(e) => {
// 	console.log(e.target)
// });





