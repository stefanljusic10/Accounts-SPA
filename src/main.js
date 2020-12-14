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

function saveAccount() {
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
  createAccountsTable();
  accountsView.style.display = "block";
  addAccountsView.style.display = "none";
}

function createAccountsTable() {
  let html = ``;
  for (i = 0; i < db.length; i++) {
    const account = db[i];
    html += `
    <tr>
      <td>${i+1}</td>
      <td>${account.firstName}</td>
      <td>${account.lastName}</td>
      <td>${account.address}</td>
      <td>${account.job}</td>
      <td><button class="btn btn-sm btn-warning from-control">Edit</button></td>
      <td><button class="btn btn-sm btn-warning from-control">Delete</button></td>
    </tr>
    `
  }
  accountsTableBody.innerHTML = html;
}

createAccountsTable();
document.querySelector("#add-accounts-view-btn").addEventListener("click", function (e) {
  e.preventDefault();
  accountsView.style.display = "none";
  addAccountsView.style.display = "block";
})

document.querySelector("#accounts-view-btn").addEventListener("click", function (e) {
  e.preventDefault();
  accountsView.style.display = "block";
  addAccountsView.style.display = "none";
})
