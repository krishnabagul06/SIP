const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 }
];

// Extract prices
const prices = products.map(product => product.price);

// Find highest price
const highestPrice = Math.max(...prices);

console.log("Prices:", prices);
console.log("Highest Price:", highestPrice);