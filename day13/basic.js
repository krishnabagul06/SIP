// Question:1 :-  Convert names to Uppercase 

const names = ['gagan', 'ishan', 'yogesh'];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames); // Output: ['GAGAN', 'ISHAN', 'YOGESH']


// Question:2 :- Extract product Names

const products = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Mobile"},
    {id: 3, name: "Tablet"}
];
const productNames = products.map(product => product.name);
console.log(productNames); // Output: ['Laptop', 'Mobile', 'Tablet']

// Question:3 :- Filter long word

const words = ['apple', 'banana', 'cat', 'elephant', 'dog' ];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ['apple', 'banana', 'elephant']

// Question:4 :- filter Adult ( keep only users aged 18 or above)

const users = [
    { name: "A", age: 16 },
    { name: "B", age: 22 },   
    { name: "C", age: 19 },
]
const adults = users.filter(user => user.age >= 18);
console.log(adults); // Output: [{ name: "B", age: 22 }, { name: "C", age: 19 }]    

// Question:5 :- count total characters

const mywords = ["hello", "world", "javascript"];
const totalCharacters = mywords.reduce((accumulator, currentWord) => accumulator + currentWord.length, 0);
console.log(totalCharacters); // Output: 20

// Question:6 :- Get square of Even numbers 

const numbers = [1, 2, 3, 4, 5, 6,7,8];
const evenSquares = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * n);
console.log(evenSquares); // Output: [4, 16, 36, 64]

// Question:7 :- total salary of employees

const employees = [
    { name: "A", salary: 30000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 40000 },
];
const totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
console.log(totalSalary); // Output: 120000

// Question:8 :- Names of Passed students

const students = [
    { name: "A", marks: 35 },
    { name: "B", marks: 75 },
    { name: "C", marks: 45 },
    { name: "D", marks: 25 },
];
const passedStudents = students.filter(student => student.marks >= 40).map(student => student.name);
console.log(passedStudents); // Output: ['B', 'C']

// Question:9 :- Average Marks of students

const marks = [80, 90, 70, 60];
const averageMarks = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
console.log(averageMarks); // Output: 75

// Question:10 :- Count Occurrences of Elements

const elements = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const occurrences = elements.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
}, {});
console.log(occurrences); // Output: { apple: 3, banana: 2, orange: 1 }