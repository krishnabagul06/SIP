const students = [
    { name: "John", marks: [80, 90, 85] },
    { name: "Emma", marks: [95, 92, 98] }
];

let result = [];

for (let i = 0; i < students.length; i++) {

    let total = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
        total += students[i].marks[j];
    }

    let average = total / students[i].marks.length;

    result.push({
        name: students[i].name,
        average: average
    });
}

console.log(result);