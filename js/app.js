// //class Computer {
// 	constructor(brand, year, memory){
// 		this.brand = brand;
// 		this.year = year;
// 		this.memory = memory;

// 	}
// 	account(){
// 		console.log("one,two")
// 	}
function startGame(name) {
//Create class Tamogotchi
	const bobick = new Tamogotchi(name);
	document.querySelector('.action').style.display = 'block';
	document.querySelector('#start').style.display = 'none';

	document.querySelector('.feed').addEventListener('click', function() {
		bobick.eat();
	});

	document.querySelector('.play').addEventListener('click', function() {
		bobick.play();
	});

	document.querySelector('.turn').addEventListener('click', function() {
		bobick.sleep();
	});

	bobick.displayHunger();
	bobick.displaySleepines();
	bobick.displayBoredom();
	bobick.displayName();
	bobick.sing();
	bobick.setTimer();
};

document.querySelector('#start-button').addEventListener('click', function() {
	const name = document.getElementById("input-name").value;
	startGame(name);
});

class Tamogotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;

		const div = document.createElement('div');
		div.className ='tomogachi';
		div.id = name;
		document.querySelector('body').appendChild(div);

		const image = document.createElement('img');
		image.src = "assets/bobic.jpg";
		image.className ='tomogachi-pic';
		document.querySelector(`#${name}`).appendChild(image);
	}
	sing(){
		console.log("bla bla bla");
	}
	displayHunger() {
		document.querySelector('#hunger').innerHTML = ("Hunger: " + this.hunger);
	}
	displaySleepines() {
		document.querySelector('#sleepy').innerHTML = ("Sleepy: " + this.sleepiness);
	}
	displayBoredom() {
		document.querySelector('#boring').innerHTML = ("Boredom: " + this.boredom);
	}
	displayAge() {
		document.querySelector('#age').innerHTML = ("Age: " + this.age);
	}
	displayName() {
		document.querySelector('#name').innerHTML = ("Name: " + this.name);
	}
	eat() {
		this.hunger -= 3;
	}
	play() {
		this.boredom -= 3;
	}
	sleep() {
		this.sleepiness -= 3;
	}
	setTimer(){
		const $hunger = $('#hunger');
		let count = 0;
		const interval = setInterval(() => {
			if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
		        clearInterval(interval);
		        console.log ("Game over!");
		    } else {
		        this.hunger += Math.floor(Math.random() * 3);
		        this.sleepiness += Math.floor(Math.random() * 3);
		        this.boredom += Math.floor(Math.random() * 3);
		    }
		    if (count % 60 === 0) {
		    	this.age++;
		    }
		    // update the time on the dom
		        
		    //$hunger.innerHTML = `hunger: ${this.hunger}s`;
		    this.displayHunger();
		    this.displaySleepines();
		    this.displayBoredom();
		    this.displayAge();
		    count++;
		}, 1000);
	}
}












