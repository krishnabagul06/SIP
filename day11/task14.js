const marks = [45, 80, 60, 90, 30];

let passedMarks = [];
let total = 0;

for(let i = 0; i < marks.length; i++) {

    if(marks[i] > 50) {
        passedMarks.push(marks[i]);
        total += marks[i];
    }

}

let average = total / passedMarks.length;

console.log(passedMarks);
console.log(average);