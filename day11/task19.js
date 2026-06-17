const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
];

let updatedPrices = [];

for(let i = 0; i < products.length; i++) {

    let discountedPrice = products[i].price * 0.9;

    updatedPrices.push(discountedPrice);
}

console.log(updatedPrices);