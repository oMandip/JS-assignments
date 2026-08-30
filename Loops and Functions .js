

// Section 1



// 1. Write a program to print numbers from 1 to 10 using a for loop. 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Write a program to print all even numbers from 1 to 20. 

for (let i = 1; i <= 20; i++)
    if (i % 2 === 0) {
        console.log(i);
    }



// 3. Write a program to print all odd numbers from 1 to 20

for (let i = 1; i <= 20; i++)
    if (i % 2 !== 0) {
        console.log(i);
    }





// 4. Write a program to print numbers from 10 to 1 using a loop. 

for (let i = 10; i >= 1; i--) {
    console.log(i);
}





// 5. Write a program to calculate the sum of numbers from 1 to 10. 

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);






// 6. Take a number and print its multiplication table up to 10

let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num * i);
}










// Part B : While Loop

// 7. Write a program to print numbers from 1 to 10 using a while loop.

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}





// 8. Write a program to calculate the sum of all even numbers from 1 to 20.

let i = 1;
let sum = 0;

while (i <= 20) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
    i++
}
console.log(sum);






// 9. Write a program using a while loop to print numbers from 1 onwards, 
// but stop the loop when the number reaches 6 using the break statement.  


let i = 1;

while (i <= 10) {
    if (i === 6) {
        break;
    }
    
    console.log(i);
    i++;
}





// 10. Print numbers from 1 to 10, but skip the number 5 using the continue statement. 

let i = 0;

while(i < 10){
    i++;

    if(i === 5){
        continue;
    }
    console.log(i);
}





// Section 2 - Functions 


// 11. Create a function named greetUser(name) that takes a name as a 
// parameter and displays a greeting message. 


function grretMSG(userName) {
    console.log(` Hello, ${userName} `);
}

grretMSG("MD");




// 12. Create a function that takes two numbers as parameters and returns their sum

function sumNumbers(a, b){
    return a+b;
}

let result = sumNumbers(10, 20);

console.log(result);



// 13. Create a function that takes a number and checks whether it is even or odd. 

function evenOdd(num) {
    if (num % 2 === 0){
        return "Even";
    } else {
        return "Odd"
    }
}
console.log(evenOdd(7));





// 14. Create a function that takes a number and returns its square. 

function  square(num){
    return num * num;
}
console.log(square(5));





// 15. Create a function that takes two numbers and returns the greater number. 

function greater(a, b){
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(greater(46, 87));





// 16. Create a function named calculateTotal(price, quantity) using a 
// function declaration. The function should calculate and display the
//  total price.

function calculateTotal(price, quantity) {
    let total = price + quantity;

    console.log(`Total Price: ${total}`);
}

calculateTotal(56 , 90);









// Section 3 - Functions with Loops 


// 17. Create a function printNumbers(n) that prints numbers from 1 to n using a loop.


function printNumbers(n){
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(5)




// 18. Create a function printTable(num) that prints the multiplication table of the given number. 

function printTable(num) {
    for (let i = 1; i <=10; i++){
        console.log(num * i); 
    }
}
printTable(5)







// 19. Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 


function sumNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++){
        sum = sum + i;
    }

    return sum;
}
console.log(`Sum = ${sumNumbers(8)}`);