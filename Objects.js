// Section 1 – Working with Objects 

const { use } = require("react");

// 1. Create an object named user containing the properties name, email, and role.
//  Display the complete  object. 

let user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
};
console.log(user);



// 2. Create a product object containing name, price, and category. 
// Use dot notation to display the product name and price


const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};
console.log(product.name);
console.log(product.price);





// 3. Create a user object containing name and email. Use bracket notation to display the email property.


const user = {
    name: "Rahul",
    email: "rahul@example.com"
};
console.log(user["email"]);




// 4. Store a property name in a variable and use bracket notation to access that property from an object.

const user = {
    name: "Rahul",
    email: "rahul@example.com"
};
const key = "name";

console.log(user[key]);





// 5. Create a user object with name and role. Update the role from "student" 
// to "developer" and display the updated object. 


const user = {
    name: "Rahul",
    role: "student"
};
user.role = "Developer";
console.log(user);





// 6. Create a profile object containing name and email. Add a new property named isLoggedIn with the value true. 

const profile = {
    name: "Rahul",
    email: "rahul@example.com"
};

profile.isLoggedIn = true;

console.log(profile);





// Section 2 – Object Keys, Values and Entries 


// 7. Create a user object containing name, email, and role. Use Object.keys() to get all the property names. 

const user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
};

console.log(Object.keys(user));




// 8. Create a product object containing name, price, and category. Use Object.values() to get all the values from the object. 

const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};
console.log(Object.values(product));



// 9. Create a settings object and use Object.entries() to convert its properties into key-value pairs. 

const settings = {
    theme: "dark",
    language: "English",
    notifications: true
};
console.log(Object.entries(settings));




// 10. Create an object containing a user's name and email. Use Object.entries() and forEach() to display each key along with its value.

const user = {
    name: "Rahul",
    email: "rahul@example.com"
};

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});




// Section 3 – Destructuring and Shorthand Properties

// 11. Create a user object containing name, email, and role. Use object destructuring to extract name and email into separate variables. 

const user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
};
const { name, email } = user;

console.log(name);
console.log(email);




// 12. Create a product object containing name and price. Use destructuring to store the name property in a variable named productName. 

const product = {
    name: "Laptop",
    price: 50000
};

const { name: productName } = product;

console.log(productName);




// 13. Create variables named name, email, and role. Use shorthand property syntax to create a user object using these variables. 

const name = "Rahul";
const email = "rahul@example.com";
const role = "developer";

const user = {
    name,
    email,
    role
};

console.log(user);




// 14. Create a function named displayUser that receives a user object. Use object destructuring in the function parameters to access and display name and email.

function displayUser({ name, email }) {
    console.log(name);
    console.log(email);
}

displayUser({
    name: "Rahul",
    email: "rahul@example.com"
});








// Section 4 – Spread and Rest 


// 15. Create a user object and use the spread operator to create a copy of it.

const user = {
    name: "Rahul",
    role: "developer"
};

const newUser = { ...user };

console.log(newUser);






// 16. Create a user object containing name and role. Use the spread operator to create a new object and update the role to "developer". 

const user = {
    name: "Rahul",
    role: "student"
};

const newUser = {
    ...user,
    role: "Developer"
};

console.log(newUser);





// 17. Create one array containing frontend technologies and another containing backend technologies. Use the spread operator to combine them into a single array.

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const combine = [
    ...frontend,
    ...backend
];

console.log(combine);





// 18. Create a function named showSkills that accepts a developer's name as the first parameter and any number of skills using a rest parameter. Display the name and skills. 

function showSkills(name, ...skills) {
    console.log(`Name: ${name}, Skills: ${skills.join(" , ")}`);
}

showSkills("Rahul", "HTML", "CSS", "JavaScript");