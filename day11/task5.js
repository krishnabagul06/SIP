const products = [
    { name: "Laptop", stock: 5 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 10 }
];

let availableNames = [];

for(let i = 0; i < products.length; i++) {

    if(products[i].stock > 0) {
        availableNames.push(products[i].name);
    }

}

console.log(availableNames);
