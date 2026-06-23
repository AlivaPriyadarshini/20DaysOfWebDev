const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function saveExpenses() {
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

function renderExpenses() {

    expenseList.innerHTML = "";

    let totalAmount = 0;

    expenses.forEach((expense, index) => {

        totalAmount += expense.amount;

        expenseList.innerHTML += `
        
        <div class="expense">

            <span>
                ${expense.name} - ₹${expense.amount}
            </span>

            <button
                class="delete"
                onclick="deleteExpense(${index})"
            >
                Delete
            </button>

        </div>
        
        `;

    });

    total.textContent = `Total: ₹${totalAmount}`;

}

addBtn.addEventListener("click", () => {

    if (
        expenseName.value.trim() === "" ||
        expenseAmount.value === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    expenses.push({
        name: expenseName.value,
        amount: Number(expenseAmount.value)
    });

    saveExpenses();

    renderExpenses();

    expenseName.value = "";
    expenseAmount.value = "";

});

function deleteExpense(index) {

    expenses.splice(index, 1);

    saveExpenses();

    renderExpenses();

}

renderExpenses();