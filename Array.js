// Section 1 - Basic Array Operations 

// 1. Create an array containing the names of five fruits and display the complete array.

let fruits = ["Apple", "Mango", "Strawberry", "Banana", "Watermelon",]
console.log(fruits);



// 2. Create the following array and use push() to add "JavaScript" at the end. 

let lang = ["HTML", "CSS"]

lang.push("JavaScript");

console.log(lang)



// 3. Remove the last element from the given array using pop().

let arr =  ["HTML", "CSS", "JavaScript"];

arr.pop("JavaScript");

console.log(arr);





// 4. Remove the first element from the following array using shift(). 

let col = ["Red", "Blue", "Green"];

col.shift();
console.log(col);







// 5. Use unshift() to add "HTML" at the beginning of the following array.

let lang = ["CSS", "JavaScript"]

lang.unshift("HTML");

console.log(lang);




// 6. Create an array containing two programming languages and use push() 
// to add two more languages to the array. 


let arr = ["HTML", "CSS"]

arr.push("JavaScript", "React")

console.log(arr);






// Section 2 - splice() and slice() 


// 7. Remove "CSS" from the following array using splice(). 

let lang = ["HTML", "CSS", "JavaScript", "React"]

lang.splice(1, 1)

console.log(lang);



// 8. Use splice() to add "CSS" between "HTML" and "JavaScript".

let lang = ["HTML", "JavaScript"];

lang.splice(1, 0, "CSS");

console.log(lang);



// 9. Use splice() to replace "Java" with "JavaScript".

let lang =  ["HTML", "CSS", "Java"];

lang.splice(2, 1, "JavaScript")

console.log(lang);



// 10. Use slice() to create a new array containing "CSS", "JavaScript", and "React".

let lang  = ["HTML", "CSS", "JavaScript", "React", "Node.js"] ;

console.log(lang.slice(1, 4)); 

console.log(lang);



// 11. Create an array of your choice and use slice() without any arguments to create a copy of that array. 

let arr = ["Apple", "Banana", "Pineapple"];
console.log(arr.slice());



// Section 3 - Searching in Arrays 


// 12. Use indexOf() to find the index of "JavaScript".

let lang = ["HTML", "CSS", "JavaScript", "React"] ;
console.log(lang.indexOf("JavaScript"));



// 13. Create an array of programming languages and use indexOf() to find the position of "React".

let lang = ["CPP", "React" , "JS", "Python"];
console.log(lang.indexOf("React"));



// 14. Create an array of user objects containing name and age. 
// Use find() to get the user whose name is "Rahul". 


let arr = [
    {name : "Rahul", age: 20},
    {name : "Priya", age: 22}
];

let find = arr.find((arr) => {
    return arr.name === "Rahul";
});

console.log(find);




// 15. Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya". 

let arr = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
];

let finx = arr.findIndex((arr) => {
    return arr.name === "Priya";
});
console.log(finx);





// Section 4 - Other Array Methods 


// 16. Use flat() to convert the nested array into a single-level array.

let num =  [1, 2, [3, 4]];

console.log(num.flat());



// 17. Use flat() with an appropriate depth to flatten the following array completely.

let num =  [1, 2, [3, 4]];

console.log(num.flat(2));





// 18. Create an array containing five colors and use forEach() to display every color.

let arr = ["Red", "Green", "Black", "Pink", "yellow",];
arr.forEach((arr) => {
    console.log(arr);
});




// 19. Create an array of programming languages and use forEach() to 
// display each element along with its index. 

let prog = ["HTML", "CSS", "JavaScript", "React"];

prog.forEach((prog, index) => {
    console.log(index, prog);
});





// 20. Perform the following operations on an array: 
// 1. Add "React" using push(). 
// 2. Remove the first element using shift(). 
// 3. Display the final array.


let arr =  ["HTML", "CSS", "JavaScript"];

arr.push("React");

arr.shift();

console.log(arr);