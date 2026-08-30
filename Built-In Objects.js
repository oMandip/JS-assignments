// 1. Use Math.random() to generate and display a random number. 

let random =Math.random()
console.log(random);


// 2. Use Math.random() and Math.floor() to generate a random whole number between 1 and 10.

let random = Math.floor(Math.random() * 10) +1 ;
console.log(random);




// 3. Use Math.round() to round the number 4.6 to the nearest integer.

let round = Math.round(4.6)
console.log(round);




// 4. Use Math.floor() and Math.ceil() on the number 7.3 and display both results. 

let number = 7.3;

console.log(Math.floor(number));
console.log(Math.ceil(number));




// 5. Use Math.abs() to find the positive value of -25.

let number = -25;

console.log(Math.abs(number));





// 6. Use Math.pow() to calculate 2 raised to the power 3 and Math.sqrt() to find the square root of 64. 

console.log(Math.pow(2, 3));

console.log(Math.sqrt(64));





// 7. Use Math.min() and Math.max() to find the smallest and largest values from 10, 25, 5, and 18.

console.log(Math.min(10, 25, 5, 18));
console.log(Math.max(10, 25, 5, 18));


// OR 


let numbers = [10, 25, 5, 18];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));






// Section 2 - String Built-in Methods



// 8. Create a string "JavaScript Programming" and use slice() to extract the word "JavaScript". 

let text = "JavaScript Programming";

console.log(text.slice(0, 10));





// 9. Create a string "HTML,CSS,JavaScript" and use split() to separate the values. 


let lang = "HTML,CSS,JavaScript";

let result = lang.split(",");

console.log(result);




// 10. Create a string "Hello World" and use replace() to replace "World" with "JavaScript".

let text = "Hello World";
console.log(text.replace("World", "JavaScript"));





// 11. Create a variable email containing an email address and use includes() to check whether it contains the 
// @ symbol. 

let email = "user@example.com";

console.log(email.includes("@"));




// 12. Create a variable fileName containing "assignment.pdf" and use endsWith() to check whether the file 
// has a .pdf extension. 


let fileName = "assignment.pdf";
console.log(fileName.endsWith(".pdf"));




// 13. Create a string with extra spaces, such as "   Hello JavaScript   ", and use trim() to remove the spaces 
// from the beginning and end. 


let text = "   Hello JavaScript   ";
console.log(text.trim());



// 14. Create a variable greet containing "Hello User" and use replace() to change "User" to a name of your 
// choice. 


let greet = "Hello User";
console.log(greet.replace("User", "MD" ));






// Section 3 - Number Built-in Methods 

// 15. Create a variable containing the number 12.56789 and use toFixed(2) to display the number with two 
// decimal places. 


let num = 12.56789;
console.log(num.toFixed(2));



// 16. Create a variable price containing a decimal value and use toFixed(2) to display it as a price with two 
// decimal places. 


let price = 99.5;
console.log(price.toFixed(2));





// Section 4 - Date Object 

// 17. Create a Date object using new Date() and display the current date and time. 

let currentDate = new Date();
console.log(currentDate);





// 18. Create a Date object for a specific date of your choice and display it. 

let specificDate = new Date("01-07-2026");
console.log(specificDate);




// 19. Use Date.now() to get and display the current timestamp. 

let time = Date.now();

console.log(time);



// 20. Create two Date objects for two different dates and find the difference between them in milliseconds.


let date1 = new Date("2026-01-01");
let date2 = new Date("2026-01-02");

let difference = date2 - date1;

console.log(difference);