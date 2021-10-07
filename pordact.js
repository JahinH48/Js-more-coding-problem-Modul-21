const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];

let totalcard = 0;
for (const pordoct of cart) {
    totalPorductIs = pordoct.price * pordoct.quantity;

    totalcard = totalcard + totalPorductIs;

}
console.log(totalcard);