const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Instructor = sequelize.define("Instructor", {
  name: DataTypes.STRING
});

module.exports = Instructor;