const users = [
    { name: "John", age: 25 },
    { name: "Emma", age: 16 },
    { name: "Alex", age: 20 }
];

let adultNames = [];

for(let i = 0; i < users.length; i++) {

    if(users[i].age >= 18) {
        adultNames.push(users[i].name);
    }

}

console.log(adultNames);