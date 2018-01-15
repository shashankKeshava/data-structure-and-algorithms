function whoAmI(name) {
    return new Promise(function(resolve, reject) {
        if (!!name) resolve('I am ' + name);
        else reject('Invalid name');
    });
}

console.log(whoAmI('Shank').then((msg)=>{console.log(msg)}));
console.log(whoAmI());
