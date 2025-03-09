document.addEventListener("DOMContentLoaded", function () {
    let employeeContainer = document.getElementById("employeeContainer"); // get a employee container
    let addEmployeeBtn = document.getElementById("addEmployeeBtn"); // getan  add button
    let highlightBtn = document.getElementById("highlightBtn"); // get a highlight button

    // Task 2 - Adding Employee Cards Dynamically
function addEmployeeCard(name, position) {
    let card = document.createElement("div"); // make card element
    card.classList.add("employee-card"); 

    let heading = document.createElement("h3"); // create the name heading
    heading.textContent = name; 

    let paragraph = document.createElement("p"); // put a position paragraph
    paragraph.textContent = position; 

    let removeBtn = document.createElement("button"); // Create remove button
    removeBtn.textContent = "Remove"; // Set button text
    removeBtn.classList.add("remove-btn"); // Add button class

    let editBtn = document.createElement("button"); // Create edit button
    editBtn.textContent = "Edit"; // Set button text
    editBtn.classList.add("edit-btn"); // Add button class

    card.appendChild(heading); // Add  a heading inside
    card.appendChild(paragraph); // Add  a paragraph inside
    card.appendChild(editBtn); 
    card.appendChild(removeBtn); // Add remove button

    employeeContainer.appendChild(card); 
}

// Task 3 - Converting NodeLists to Arrays for Bulk Updates
function highlightAllCards() {
    let cards = document.querySelectorAll(".employee-card"); //get all of the cards
    let cardsArray = Array.from(cards); 

    cardsArray.forEach(function (card) {
        card.classList.add("hightlight"); // Add highlight class (typo)
    });
}

// Task 4 - Implementing Ticket Resolution with Event Bubbling
employeeContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) { // Check remove click
        event.stopPropagation(); // Stop event bubbling
        let cardToRemove = event.target.parentElement; // Get card parent
        employeeContainer.removeChild(cardToRemove); // Remove card element
    } else if (event.target.classList.contains("employee-card")) { // Check card click
        console.log("Employee card clicked!"); // Log card click
    }
});

// Task 5 - Inline Editing of Support Tickets
function editEmployeeCard(card, heading, paragraph) {
    let nameInput = document.createElement("input"); // Create name input
    nameInput.type = "text"; // Set input type
    nameInput.value = heading.textContent; // Set input value

    let positionInput = document.createElement("input"); // Create position input
    positionInput.type = "text"; // Set input type
    positionInput.value = paragraph.textContent; // Set input value

    let saveBtn = document.createElement("button"); // Create save button
    saveBtn.textContent = "Save"; // Set button text
    saveBtn.addEventListener("click", function () {
        heading.textContent = nameInput.value; // Update name text
        paragraph.textContent = positionInput.value; // Update position text

        card.innerHTML = ""; // Clear card content
        card.appendChild(heading); 
        card.appendChild(paragraph); 
        card.appendChild(editBtn); 
        card.appendChild(removeBtn); 
    });

    card.innerHTML = ""; // Clear card content
    card.appendChild(nameInput); // Add name input
    card.appendChild(positionInput); // Add position input
    card.appendChild(saveBtn); // Add save button
}

// Event Listeners for Buttons
addEmployeeBtn.addEventListener("click", function () { // Listen add button
    let name = prompt("Enter Employee Name:"); // Get name input
    let position = prompt("Enter Employee Position:"); 
    if (name && position) { 
        addEmployeeCard(name, position); // Add employee card
    }
});

highlightBtn.addEventListener("click", highlightAllCards); // Listen highlight button

// Example Employees
addEmployeeCard("Ramy Abdelbaky", "President"); // Add example employee
addEmployeeCard("Floyd Mayweather", "Finance Intern"); 
});