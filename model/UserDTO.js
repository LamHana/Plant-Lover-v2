class UserDTO {
  constructor(
    userID,
    userName,
    phoneNumber,
    roleID,
    address,
    accountID,
    isDeleted
  ) {
    this.userID = userID;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
    this.roleID = roleID;
    this.address = address;
    this.accountID = accountID;
    this.isDeleted = isDeleted;
  }

  getUserID() {
    return userID;
  }

  setUserID(userID) {
    this.userID = userID;
  }

  getUserName() {
    return this.userName;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  getRoleID() {
    return this.roleID;
  }

  setRoleID(roleID) {
    this.roleID = roleID;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getAccountID() {
    return this.accountID;
  }

  setAccountID(accountID) {
    this.accountID = accountID;
  }
}

module.exports = UserDTO;
