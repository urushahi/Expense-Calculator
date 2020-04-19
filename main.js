let i = 0;
let income = [];
let incomeTotal;

let expenses = [];
let expenseTotal;

function addIncome() {
  let i = income.length;
  let incomenew = parseInt(document.getElementById(i).value);
  if (incomenew != "") {
    income.push(incomenew);
  }
}

function addInputfield() {
  // addIncome();
  let i = income.length;

  var input = document.createElement("input");
  input.type = "text";
  input.id = "incomeName" + i;
  input.placeholder = "Other Income..";
  input.setAttribute("class", "form-control");
  incomeNameField.appendChild(input);

  var input = document.createElement("input");
  input.type = "number";
  input.id = i;
  input.setAttribute("class", "form-control");
  incomeField.appendChild(input);
}

function totalIncome() {
  addIncome();
  incomeTotal = 0;
  for (i = 0; i < income.length; i++) {
    incomeTotal = parseInt(incomeTotal) + income[i];
  }
  return incomeTotal;
}

function addExpense() {
  let e = expenses.length;
  let expensesnew = parseInt(document.getElementById("expenses" + e).value);
  if (expensesnew != "") {
    expenses.push(expensesnew);
    // addExpensesfield(expenses.length - 1);
  }
}

function addExpensesfield() {
  // addExpense();
  let i = expenses.length;
  var input = document.createElement("input");
  input.type = "number";
  input.id = "expenses" + i;
  input.setAttribute("class", "form-control");
  expenseField.appendChild(input);

  var input = document.createElement("input");
  input.type = "text";
  input.id = "expensesName" + i;
  input.placeholder = "Food,Rents,Clothes...etc";
  input.setAttribute("class", "form-control");
  expenseNameField.appendChild(input);
}

function totalExpenses() {
  addExpense();
  expenseTotal = 0;
  for (i = 0; i < expenses.length; i++) {
    expenseTotal = parseInt(expenseTotal) + expenses[i];
  }
  return expenseTotal;
}

function calculate() {
  let u = parseInt(totalIncome());
  let e = parseInt(totalExpenses());
  let total = 0;

  total = u - e;

  var li = document.createElement("li");
  var textnode = document.createTextNode("Income :" + incomeTotal);
  li.id = "incomedisp";
  li.appendChild(textnode);
  document.getElementById("list").appendChild(li);

  var li = document.createElement("li");
  var textnode = document.createTextNode("Expenses : " + expenseTotal);
  li.id = "expensedisp";
  li.appendChild(textnode);
  document.getElementById("list").appendChild(li);

  var li = document.createElement("li");
  var textnode = document.createTextNode("Remaining:" + total);
  li.appendChild(textnode);
  if (total < -1) {
    li.setAttribute("class", "bg-danger text-white");
  } else {
    li.setAttribute("class", "bg-success text-white");
  }

  document.getElementById("list").appendChild(li);
}
