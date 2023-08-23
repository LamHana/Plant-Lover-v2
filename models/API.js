class API {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getMessage() {
    return this.message;
  }

  setMessage(message) {
    this.message = message;
  }

  getData() {
    return this.message;
  }

  setData(data) {
    this.data = data;
  }
}

module.exports = API;
