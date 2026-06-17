const cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 500 }
];

let totalValue = 0;

for(let i = 0; i < cart.length; i++) {
    totalValue += cart[i].price;
}

console.log(totalValue);