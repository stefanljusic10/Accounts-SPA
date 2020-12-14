let db = [];
let accountsTableBody = document.querySelector("#accounts-table-body");
let links = document.querySelector(".nav-link");
let accountsView = document.querySelector("#accounts-view");
let addAccountsView = document.querySelector("#add-accounts-view");
let views = document.querySelectorAll(".view");
let firstNameInput = document.querySelector('[placeholder="First Name"]');
let lastNameInput = document.querySelector('[placeholder="Last Name"]');
let addressInput = document.querySelector('[placeholder="Address"]');
let jobInput = document.querySelector('[placeholder="Job"]');
let saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", saveAccount);

function saveAccount(){
  const newAccount = {
    id: db.length + 1,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    address: addressInput.value,
    job: jobInput.value
  }

  db.push(newAccount);
  firstNameInput.value = "";
  lastNameInput.value = "";
  addressInput.value = "";
  jobInput.value = "";
  while (accountsTableBody.firstChild){
    accountsTableBody.removeChild(accountsTableBody.firstChild);
  }
  createAccountsTable();
  accountsView.style.display = "block";
  addAccountsView.style.display = "none";
}

function createAccountsTable() {
  for (i = 0; i < db.length; i++) {
    const accounts = db[i];
    let tr = document.createElement("tr");
    for (const key in accounts) {
      let td = document.createElement("td");
      td.textContent = accounts[key];
      tr.appendChild(td);
    }
    accountsTableBody.appendChild(tr);
  }
}

createAccountsTable();
document.querySelector("#add-accounts-view-btn").addEventListener("click", function(e){
  e.preventDefault();
  accountsView.style.display = "none";
  addAccountsView.style.display = "block";
})

document.querySelector("#accounts-view-btn").addEventListener("click", function(e){
  e.preventDefault();
  accountsView.style.display = "block";
  addAccountsView.style.display = "none";
})
