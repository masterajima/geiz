const { Sequelize } = require("sequelize");

//database configuration
const sequelize = new Sequelize({
  database: "<your_database_name>",
  username: "<your_username>",
  password: "<your_password>",
  host: "<your_host>",
  port: "<your_port>",
  dialect: "postgres",
});

//test
async function testConnection() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("unable to connect to database", error);
  }
}
module.exports = { sequelize, testConnection };
