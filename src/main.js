let accountsTableBody = document.querySelector("#accounts-table-body");
let links = document.querySelector(".nav-link");
let accountsView = document.querySelector("#accounts-view");
let addAccountsView = document.querySelector("#add-accounts-view");
let views = document.querySelectorAll(".view");

// for (let i = 0; i < links.length; i++) {
//   links.addEventListener("click", showView);
// }

// function showView(e){
//   e.preventDefault();
//   for (let i = 0; i < views.length; i++) {
//     views[i].style.display = "none";
//   }

//   let id = `#${e.target.getAttribute("href")}`;
//   document.querySelector(id).style.display = "block";
// }

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
