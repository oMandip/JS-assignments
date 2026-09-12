

// Section 1 - Selecting and Modifying Elements



// 1. Select an Element by ID 

const title = document.getElementById("title");
title.textContent = "Hello JavaScript";




// 2. Select an Element Using querySelector() 

const description = document.querySelector(".description");
description.textContent = "New Description";



// 3. Select Multiple Elements Using querySelectorAll() 

const items = document.querySelectorAll(".item");
items.forEach(function (item) {
    item.style.color = "blue";
});


// 4. Change Content Using textContent 

document.getElementById("message").textContent = "Welcome to JavaScript";




// 5. Add HTML Using innerHTML

document.getElementById("inner").innerHTML = `
<h2> My Website </h2>
<p> Welcome to my website </p>`;




// Section 2 - Attributes, Classes and Styles 


// 6. Change an Attribute Using setAttribute()

const pImage = document.getElementById("profileImage");

profileImage.setAttribute("src" , "new.jpg");
profileImage.setAttribute("alt" , "New Image");



// 7. Add and Remove Classes Using classList 

const btn = document.getElementById("btn");

btn.classList.add("btn2");
btn.classList.remove("btn2");



// 8. Modify Element Style

const heading = document.getElementById("heading");
heading.style.color = "pink";
heading.style.fontSize = "40px";
heading.style.backgroundColor = "black";



// 9. Read Data Using dataset

const productBtn = document.getElementById("productBtn");
console.log(productBtn.dataset.id);


// Section 3 - Creating and Adding Elements 


// 10. Create an Element Using createElement() 

const container = document.getElementById("container");

const para = document.createElement("p");

para.textContent = "This paragraph was created using JavaScript.";

container.appendChild(para);



// 11. Add an Element Using appendChild()

// const skills = document.getElementById("skills");

// const html = document.createElement("li");
// html.textContent = "HTML";

// const css = document.createElement("li");
// css.textContent = "CSS";

// const javascript = document.createElement("li");
// javascript.textContent = "JavaScript";

// skills.appendChild(html);
// skills.appendChild(css);
// skills.appendChild(javascript);



// 12. Add Elements Using append() and prepend() 

const lang = document.getElementById("lang");

const html = document.createElement("li");
html.textContent = "HTML";

const react = document.createElement("li");
react.textContent = "React";

lang.prepend(html);
lang.append(react);



// 13. Insert an Element Using insertBefore() 

const langs = document.getElementById("skills");

const css = document.createElement("li");
css.textContent = "CSS";

const secondI = langs.children[1];

langs.insertBefore(css , secondI)



// Section 4 — Removing & Cloning Elements

// 14. Remove an Element 

const skills2 = document.getElementById("skills2");

const csss = skills2.children[1];

csss.remove();


// 15. Clone an Element Using cloneNode()

const btn4 = document.getElementById("btn4");
const cont = document.getElementById("cont");

const clonebtn = btn4.cloneNode(true);

cont.appendChild(clonebtn);
