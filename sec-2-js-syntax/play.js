var name = 'Liam';
var age = 20;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

console.log(summarizeUser(name,age,hasHobbies));
