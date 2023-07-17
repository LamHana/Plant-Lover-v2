class AccountDTO {
  constructor(accountID, email, password) {
    this.accountID = accountID;
    this.email = email;
    this.password = password;
  }

  getAccountID() {
    return accountID;
  }

  setAccountID(accountID) {
    this.accountID = accountID;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
}

module.exports = AccountDTO;
