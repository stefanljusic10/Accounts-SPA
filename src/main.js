let accountsTableBody = document.querySelector("#accounts-table-body");

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
