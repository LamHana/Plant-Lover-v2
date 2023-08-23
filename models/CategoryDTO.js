class CategoryDTO {
  constructor(categoryID, name) {
    this.categoryID = categoryID;
    this.name = name;
  }

  getCategoryID() {
    return this.categoryID;
  }

  setCategoryID(categoryID) {
    this.categoryID = categoryID;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = CategoryDTO;
