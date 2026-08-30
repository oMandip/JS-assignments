let cart = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];

let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log(total);