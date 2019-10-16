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

// Principle 4

// code example for Explicit Binding