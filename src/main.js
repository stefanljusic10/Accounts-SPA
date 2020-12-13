let accountsTableBody = document.querySelector("#accounts-table-body");
let links = document.querySelector(".nav-link");
let accountsView = document.querySelector("#accounts-view");
let addAccountsView = document.querySelector("#add-accounts-view");
let views = document.querySelectorAll(".view");

for (let i = 0; i < links.length; i++) {
  links.addEventListener("click", showView);
}

function showView(e) {
  e.preventDefault();
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = "none";
  }

  let id = `#${this.getAttribute("href")}`;
  document.querySelector(id).style.display = "block";
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
