class OrderDetailDTO {
  constructor(orderDetailHeaderID, date, status, orderHeaderID) {
    this.orderDetailHeaderID = orderDetailHeaderID;
    this.date = date;
    this.status = status;
    this.orderHeaderID = orderHeaderID;
  }

  getOrderDetailHeaderID() {
    return this.orderDetailHeaderID;
  }

  setOrderDetailHeaderID(orderDetailHeaderID) {
    this.orderDetailHeaderID = orderDetailHeaderID;
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

  getOrderHeaderID() {
    return this.orderHeaderID;
  }

  setOrderHeaderID(orderHeaderID) {
    this.orderHeaderID = orderHeaderID;
  }
}

module.exports = OrderDetailDTO;
