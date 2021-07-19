// const name = 'Liam';
// let age = 20;
// const hasHobbies = true;

// age = 21;

// function summarizeUser(userName, userAge, userHasHobby){
//     return (
//         'Name is ' +
//         userName +
//         ', age is ' +
//         userAge +
//         ' and the user has hobbies: ' +
//         userHasHobby
//     );
// }

// //const add = (a,b) => a + b;

// //const addOne = (a) => a + 1;


// console.log(summarizeUser(name,age,hasHobbies));


// a key-value pair is also called a "property" or a "field" of the object
const person = {
    name: 'Liam',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Jiu Jitsu', 'Cooking'];

// for(let hobby of hobbies){
//     console.log(hobby);
// }
hobbies.push('Programming');
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
