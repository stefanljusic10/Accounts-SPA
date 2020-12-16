window.addEventListener("beforeunload", save);
let db = [];

if(localStorage.db){
  db = JSON.parse(localStorage.getItem("accounts"));
}

let accountsTableBody = document.querySelector("#accounts-table-body");
let accountsView = document.querySelector("#accounts-view");
let addAccountsView = document.querySelector("#add-accounts-view");
let firstNameInput = document.querySelector('[placeholder="First Name"]');
let lastNameInput = document.querySelector('[placeholder="Last Name"]');
let addressInput = document.querySelector('[placeholder="Address"]');
let jobInput = document.querySelector('[placeholder="Job"]');
let saveBtn = document.querySelector("#save-btn");
let editAccountsView = document.querySelector("#edit-accounts-view");
let editBtn = document.querySelector("#edit-btn");
let firstNameEdit = document.querySelector("#first-name-edit");
let lastNameEdit = document.querySelector("#last-name-edit");
let addressEdit = document.querySelector("#address-edit");
let jobEdit = document.querySelector("#job-edit");
let idEdit;

saveBtn.addEventListener("click", saveAccount);
editBtn.addEventListener("click", saveEditedAccount);

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

function saveEditedAccount(){
  const editedAccount = {
    id: idEdit,
    firstName: firstNameEdit.value,
    lastName: lastNameEdit.value,
    address: addressEdit.value,
    job: jobEdit.value
  }

  db[idEdit] = editedAccount;
  createAccountsTable();
  accountsView.style.display = "block";
  addAccountsView.style.display = "none";
  editAccountsView.style.display = "none";
}

function createAccountsTable() {
  let html = ``;
  for (let i = 0; i < db.length; i++) {
    const account = db[i];
    html += `
    <tr>
      <td>${i+1}</td>
      <td>${account.firstName}</td>
      <td>${account.lastName}</td>
      <td>${account.address}</td>
      <td>${account.job}</td>
      <td><button id="edit${i}" class="btn btn-sm btn-warning from-control">Edit</button></td>
      <td><button id="delete${i}" class="btn btn-sm btn-warning from-control" style="background-color: red">Delete</button></td>
    </tr>
    `
  }
  accountsTableBody.innerHTML = html;

  for (let i = 0; i < db.length; i++) {
    document.querySelector(`#edit${i}`).addEventListener("click", editAccount);
    document.querySelector(`#delete${i}`).addEventListener("click", deleteAccount);
  }
}

function editAccount(e){
  accountsView.style.display = "none";
  addAccountsView.style.display = "none";
  editAccountsView.style.display = "block";

  idEdit = e.target.getAttribute("id");
  idEdit = idEdit.replace("edit", "");
  let editAccount = db[idEdit];

  firstNameEdit.value = editAccount.firstName;
  lastNameEdit.value = editAccount.lastName;
  addressEdit.value = editAccount.address;
  jobEdit.value = editAccount.job;
}
function deleteAccount(e){
  let idDelete = e.target.getAttribute("id");
  idDelete = idDelete.replace("delete", "");
  db.splice(idDelete, 1);
  createAccountsTable();
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

function save(){
  let dbStore = JSON.stringify(db);
  localStorage.setItem("accounts", dbStore);
}
