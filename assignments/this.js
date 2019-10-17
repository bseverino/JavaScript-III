/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The 'this' keyword defaults to the window object if none of the other rules apply (window binding). If strict mode is invoked, it becomes undefined.
* 2. In implicit binding, the 'this' keyword refers to the element that is to the left of the dot.
* 3. In explicit binding, you use .call, .apply, or .bind to explicitly state what the 'this' keyword is referring to.
* 4. In new binding, you use the 'new' keyword to construct a new object, which is what the 'this' keyword then refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding(){
    console.log(this.currentWindow);
}

var currentWindow = 'This is the window.';

windowBinding();

// Principle 2

// code example for Implicit Binding

const myCharacter = {
    name: 'Rose',
    race: 'Lalafell',
    job: 'dancer',
    pronoun: 'she',
    description: function(){
        console.log(`This is ${this.name} the ${this.race}, and ${this.pronoun} is a ${this.job}.`);
    }
}

myCharacter.description();

// Principle 3

// code example for New Binding

function Game(attr){
    this.name = attr.name,
    this.publisher = attr.publisher,
    this.year = attr.year,
    this.mainChar = attr.mainChar
    console.log(this);
}

const gameOne = new Game({
    name: 'Nier Gestalt',
    publisher: 'Square Enix',
    year: 2010,
    mainChar: 'Nier'
})

const gameTwo = new Game({
    name: 'Fallout: New Vegas',
    publisher: 'Bethesda Softworks',
    year: 2010,
    mainChar: 'Courier'
})

const gameThree = new Game({
    name: 'Bastion',
    publisher: 'Warner Bros. Interactive Entertainment',
    year: 2011,
    mainChar: 'Kid'
})

// Principle 4

// code example for Explicit Binding

function bio(){
    console.log(`My name is ${this.name}, and I am a ${this.role}.`);
}

const personOne = {
    name: 'Yuna',
    role: 'summoner'
}

const personTwo = {
    name: 'Tidus',
    role: 'guardian'
}

bio.call(personOne); // call passes arguments immediately invokes the function

personTwoBio = bio.bind(personTwo);
personTwoBio(); // bind passes the arguments, and creates a new function to invoke later