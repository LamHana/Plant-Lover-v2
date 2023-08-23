const getConnection = require("../database/sql");

const checkLogin = async (email) => {
  const conn = await getConnection();
  if (conn) {
    try {
      const request = conn.request();
      request.input("email", email);
      const result = await request.query(`
        SELECT * FROM UserTb WHERE UserTb.email = @email
      `);

      conn.close();
      return result;
    } catch (err) {
      console.log(err);
      conn.close();
      return null;
    }
  }
  return null;
};

const createNewAccount = async (account) => {
  const conn = await getConnection();
  var check = false;
  if (conn) {
    try {
      const request = conn.request();
      request.input("email", account.email);
      request.input("password", account.password);
      request.input("userName", account.userName);
      request.input("phoneNumber", account.phoneNumber);
      request.input("rodeID", account.rodeID);
      request.input("address", account.address);
      request.input("isDeleted", false);
      const result = await request.query(`
        INSERT INTO UserTb (UserName, PhoneNumber, RoleID, Address, isDeleted, email, password) OUTPUT INSERTED.userID VALUES(@userName,@phoneNumber,@rodeID,@address, @isDeleted, @email, @password)
      `);

      conn.close();
      // Check if the insertion was successful
      const userID = result.recordset[0].userID;

      if (result.rowsAffected && result.rowsAffected[0] > 0) {
        check = true;
      }
      if (check) {
        return userID;
      }
      return null;
    } catch (err) {
      console.log(err);
      conn.close();
      return null;
    }
  }
  return null;
};

const isDuplicate = async (email) => {
  const conn = await getConnection();
  if (conn) {
    try {
      const request = conn.request();
      request.input("email", email);

      const result = await request.query(`
        SELECT * FROM UserTb WHERE UserTb.email = @email
      `);

      conn.close();
      return result;
    } catch (err) {
      console.log(err);
      conn.close();
      return null;
    }
  }
  return null;
};

const getAll = async () => {
  const conn = await getConnection();
  if (conn) {
    try {
      const result = await conn.query(`
                SELECT * FROM Category;
            `);
      conn.close();
      return result;
    } catch (err) {
      console.log(err);
      conn.close();
      return null;
    }
  }
  return null;
};

exports.getAll = getAll;
exports.checkLogin = checkLogin;
exports.createNewAccount = createNewAccount;
exports.isDuplicate = isDuplicate;
