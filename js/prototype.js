const Dog = {
    init: function (name) {
        this.name = name;
    },
    bark: function () {
        console.log(this.name+' barks!!!');
    }
}

var tommy=Object.create(Dog);
tommy.init('Tommy');
tommy.bark();

var Garuda=Object.create(Dog);
Garuda.init('Garuda');
Garuda.bark=function(){
    console.log(this.name+' Flys !!!');
}
Garuda.bark();