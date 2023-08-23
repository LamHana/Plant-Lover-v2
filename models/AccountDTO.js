class UserDTO {
  constructor(
    userID,
    userName,
    phoneNumber,
    roleID,
    address,
    isDeleted,
    email,
    password
  ) {
    this.userID = userID;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
    this.roleID = roleID;
    this.address = address;
    this.isDeleted = isDeleted;
    this.email = email;
    this.password = password;
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

module.exports = UserDTO;
