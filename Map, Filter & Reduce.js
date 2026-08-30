// Section 1 – map() and Immutability 

// 1. Create an array of product names and use map() to create a new array where every product name is converted to uppercase. 

let products = ["laptop", "mobile", "headphones"];

let UC = products.map((product) => {
    return product.toUpperCase();
});

console.log(UC);




// 2. Create an array of product prices and use map() to create a new array where each price is displayed with a ₹ symbol. 

let prices = [100, 250, 500];

let result = prices.map((price) => {
    return `₹${price}`;
});

console.log(result);




// 3. Create an array of user objects containing name and email. Use map() to create a new array containing only the names.

let arr = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
];

let names = arr.map((arr1) => {
    return arr1.name;
});

console.log(names);



// 4. Create an array of product prices. Use map() to create a new array where every price is increased by 10%. Keep the original array unchanged. 

let pp = [100, 200, 300];

let newPrices = pp.map((price) => {
    return price + (price * 10 / 100);
});

console.log("Original Prices:", pp);
console.log("New Prices:", newPrices);



// 5. Create an array of user objects with name and role. Use map() and the spread operator to create a new array where the role of every user is changed to "developer" without modifying the original array. 

let profiles = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
];

let updatedProfiles = profiles.map((profile) => {
    return {
        ...profile,
        role: "Developer"
    };
});

console.log(updatedProfiles);
console.log(profiles);





// 6. Create an array of product objects containing name and price. Use map() to create a new array where each product also has an inStock property with the value true. 

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
];

let updatedProducts = products.map((product) => {
    return {
        ...product,
        instock: true
    };
});

console.log(updatedProducts);





// Section 2 – map() vs forEach() 

// 7. Create an array of frontend technologies and use forEach() to display every technology.

let tech = ["HTML", "CSS", "JavaScript"]

tech.forEach((techno) => {
    console.log(techno);
});





// 8. Using the same array of frontend technologies, use map() to create a new array where every technology is converted to uppercase. 

let tech = ["html", "css", "javascript"];

let result = tech.map((tech1) => {
    return tech1.toLocaleUpperCase();
});

console.log(result);




// 9. Create an array of names and use map() to add the text "User: " before every name. Display the new array. 

let names = ["Rahul", "Priya", "Aman"];

let add = names.map((name) => {
    return `User: ${name}`;
});

console.log(add);





// Section 3 – filter() 

// 10. Create an array of product objects containing name and inStock. Use filter() to create a new array containing only the products that are in stock. 

let products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
];

let availablePrd = products.filter((product) => {
    return product.inStock === true;
});

console.log(availablePrd);





// 11. Create an array of user objects containing name and role. Use filter() to get all users whose role is "developer". 

let users = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
];

let filt = users.filter((user) => {
    return user.role === "developer";
});

console.log(filt);




// 12. Create an array of product objects containing name and price. Use filter() to get products with a price greater than 1000. 

let products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

let comp = products.filter((product) => {
    return product.price > 1000;
});

console.log(comp);




// 13. Create an array of users containing name and isActive. Use filter() to get only the active users. 

let users = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
];

let actv = users.filter((user) => {
    return user.isActive === true;
});

console.log(actv);




// 14. Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".

let mails = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

let gmails = mails.filter((mail) => {
    return mail.includes("@gmail.com");
});

console.log(gmails);





// Section 4 – reduce() and Accumulator Pattern

// 15. Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 

let prices = [500, 1200, 300];

let cal = prices.reduce((sum, price) => {
    return sum + price;
});

console.log(cal);




// 16. Create an array of product names and use reduce() with an accumulator to count the total number of products. 

let prds = ["Laptop", "Mouse", "Keyboard"];

let cnt = prds.reduce((count, prd) => {
    return count + 1;
}, 0);

console.log(cnt);




// 17. Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total quantity of all items. 

let items = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 2 }
];

let cnt = items.reduce((total , item) => {
    return total + item.quantity;
}, 0);

console.log(cnt);





// 18. Create an array of order objects containing amount. Use reduce() to calculate the total order amount. 

let orders = [ 
{ amount: 500 }, 
{ amount: 1000 }, 
{ amount: 750 } 
] ;

let totalAmount = orders.reduce((sum, order) => {
    return sum + order.amount;
}, 0);

console.log(totalAmount);





// 19. Create an array of frontend technologies and use reduce() to combine them into a single comma-separated string. 

let techs = ["HTML", "CSS", "JavaScript"];

let str = techs.reduce((result, tech, count) => {
    if(count === 0) {
        return tech;
    }
    return result + " , " + tech;
}, "");

console.log(str);



// 20. Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final cart total by multiplying the price and quantity of each item. 

let cart = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];

let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log(total);