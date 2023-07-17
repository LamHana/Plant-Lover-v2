class ProductDTO {
  constructor(
    productID,
    productName,
    description,
    price,
    quantity,
    categoryID,
    isDeleted,
    imageID
  ) {
    this.productID = productID;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.categoryID = categoryID;
    this.isDeleted = isDeleted;
    this.imageID = imageID;
  }

  getImage() {
    return this.image;
  }

  getCategoryID() {
    return this.categoryID;
  }

  getProductID() {
    return this.productID;
  }

  getProductName() {
    return this.productName;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getQuantity() {
    return this.quantity;
  }

  isIsDeleted() {
    return this.isDeleted;
  }

  setImage(imageID) {
    this.image = imageID;
  }

  setCategoryID(categoryID) {
    this.categoryID = categoryID;
  }

  setProductID(productID) {
    this.productID = productID;
  }

  setProductName(productName) {
    this.productName = productName;
  }

  setDescription(description) {
    this.description = description;
  }

  setPrice(price) {
    this.price = price;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  setIsDeleted(isDeleted) {
    this.isDeleted = isDeleted;
  }
}

module.exports = ProductDTO;
