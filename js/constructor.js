// Using Class to define Constructor

class AnimalClass {
    constructor() {
        this.name = 'Dog'
    }
}

var Dog = new AnimalClass();

// Using Functions to define a constructor

var AnimalFn = function () {
    this.name = 'Dog';
}

var Dog = new AnimalFn();

console.log('I am a', Dog.name);