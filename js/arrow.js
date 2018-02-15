function Dragon(name) {
    this.name = 'Firezar';
    this.breath = () => {
        console.log(this.name + ' breaths fire!!!');
    }
}

var Fluffkans=new Dragon('Fluffikans');
console.log(Dragon.breath);



// Wrong