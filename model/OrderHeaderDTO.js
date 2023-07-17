class OrderHeaderDTO {
  constructor(orderHeaderID, date, status, userID) {
    this.orderHeaderID = orderHeaderID;
    this.date = date;
    this.status = status;
    this.userID = userID;
  }

  getOrderHeaderID() {
    return this.orderHeaderID;
  }

  setOrderHeaderID(orderHeaderID) {
    this.orderHeaderID = orderHeaderID;
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(userID) {
    this.userID = userID;
  }
}

module.exports = OrderHeaderDTO;
