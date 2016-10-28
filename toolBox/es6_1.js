let conan = {
    firstName: 'Conan',
    lastName: 'the barbarian',
    height: 178,
    weight: 90,
    email: 'conan.thecimmerian@akilonia.com',
    toString() {
        return this.firstName;
    }
};

let javascriptmancyCourse = {
    signUp(person) {
        let { firstName, lastName } = conan;
        console.log(`Thank you ${firstName}, ${lastName}!!
You have successfully signed up to our very special JavaScript course!
Welcome and prepare to learn some JavaScript!`);
    }
};

javascriptmancyCourse.signUp(conan);
