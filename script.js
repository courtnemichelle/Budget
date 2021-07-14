// create variables
let monthyIncome = 0; // Numerical value
let expenses = []; // Array of objects with name and amount properties
let expenseTotal = 0;  // Numerical value
let balance = 0; // numerical value

// Create references to HTML elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");

let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); // DIV
let totalExpenses = document.getElementById("total_expenses"); // paragraph
let remainingBalance = document.getElementById("remaining_balance"); // paragraph

// Build a function that saves the user input of the monthly budget form
// and displays the value in the app
function updateBudget(event) {
    // this function will fire when I click the form button.
    // it takes an event as an argument; this is an object.
event.preventDefault(); // Stop auto-refresh of browser.
monthlyIncome = parseInt(incomeInput.value); // Parse input to number type
monthlyBudget.innerText = "$" + monthlyIncome;
// update the balance
updateBalance();
}
// Add updateBudget as onclick handler for the update  budget button
updateBudgetButton.onclick = updateBudget;


// Build a helper finction that updates the remaining balance
// when changes to the budget or expenses occurs
function updateBalance() {
    console.log("updateBalance fired!");
    // Determine new balance
    balance = monthlyIncome - expenseTotal;
    // Show result in the app
    remainingBalance.innerText = "$" + balance
// Change color of the text based on the remaining balance
if (balance < 0) {
    remainingBalance.classList.remove("green");
    remainingBalance.classList.add("red");

} else {
    remainingBalance.classList.add("green");
    remainingBalance.classList.remove("red");
}
}

// Build a function which saves a new expense to the expenses array
// and displays the new expense in the app
function addExpense(event) {
    console.log("addExpense fired!");
    // prevent refresh of page
    event.preventDefault();
    // Build a new expense object
    let newExpense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value) // Parse into integer
    };
    // Add to expenses array
    expenses.push(newExpense);
    // Add the new expense to the app
    let newElement = document.createElement("p");
    newElement.innerText = newExpense.name + ": $" + newExpense.amount;
    expenseList.appendChild(newElement);
    // Update expense total
    updateExpenseTotal();
    // Loop through all expenses and re-calculate total
}

// Add the addExpense function to add expense button as onclick
addExpenseButton.onclick = addExpense;

//Build a helper function that will calculate the total of the expenses 
function updateExpenseTotal() {
console.log("updateExpenseTotal fired!");
// reset expense total
    expenseTotal = 0;
    // Loop through all expenses and re-calculate total
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
 // Display total in the app
    totalExpenses.innerText = "$" + expenseTotal;
    // Update the balance
updateBalance();
}