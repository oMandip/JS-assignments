
// Section 1 — Event Handling Basics

// 1. Handle a Button Click 

const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {
    console.log("Button Clicked");
});


// 2. Change Text on Click

const message = document.getElementById("message");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    message.textContent = "Thanks for visiting!";
});




// 3. Handle a Mouseover Event

const heading = document.getElementById("heading");

heading.addEventListener("mouseover", () => {
    heading.textContent = "Mouse is over the heading!";
});





// Section 2 — Event Object


// 4. Display the Clicked Element

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", (event) => {
    console.log(event.target.tagName);
});





// 5. Display Mouse Coordinates

const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", (event) => {
    coordinates.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});





// 6. Get the Value of an Input Using the Event Object

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", (event) => {
    output.textContent = `You typed: ${event.target.value}`;
});




// Section 3 — Removing & Controlling Events

// 7. Remove an Event Listener


const btn3 = document.getElementById("btn3");

function handleClick() {
    console.log("Button clicked!");
}

btn3.addEventListener("click", handleClick);


btn3.removeEventListener("click", handleClick);




// 8. Run an Event Only Once

const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
    console.log("Welcome!");
}, {
    once: true
});




// 9. Stop Event Propagation

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", (event) => {
    event.stopPropagation();

    console.log("Button clicked");
});





// Section 4 — Bubbling & Capturing


// 10. Demonstrate Event Bubbling


const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");

parent2.addEventListener("click", () => {
    console.log("Parent clicked");
});

child2.addEventListener("click", () => {
    console.log("Button clicked");
});





// 11. Demonstrate Event Capturing

const parent3 = document.getElementById("parent3");
const child3 = document.getElementById("child3");

parent3.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

child3.addEventListener("click", () => {
    console.log("Button clicked");
}, true);





// Section 5 — Event Delegation

// 12. Handle Multiple Buttons Using Event Delegation


const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        console.log(`${event.target.textContent} button clicked`);
    }

});





// 13. Handle a Dynamic List Using Event Delegation


const skills = document.getElementById("skills");

skills.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {
        console.log(`You clicked: ${event.target.textContent}`);
    }

});