const numbers = [1, 2, 3, 4, 5, 6];

let squares = [];

for(let i = 0; i < numbers.length; i++) {

    if(numbers[i] % 2 === 0) {
        squares.push(numbers[i] * numbers[i]);
    }

}

console.log(squares);