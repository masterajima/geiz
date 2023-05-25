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
