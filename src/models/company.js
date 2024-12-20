"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //User
      Company.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "companyUserData",
      });
      Company.hasMany(models.User, {
        foreignKey: "companyId",
        as: "userCompanyData",
      });
    }
  }
  Company.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      coverimage: DataTypes.STRING,
      description: DataTypes.TEXT("long"),
      website: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      amountEmployer: DataTypes.INTEGER,
      taxnumber: DataTypes.STRING,
      typeCompany: DataTypes.STRING,
      statusCode: DataTypes.STRING,
      file: DataTypes.BLOB("long"),
      allowHotPost: DataTypes.INTEGER,
      allowCv: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Company",
      timestamps: true,
    }
  );
  return Company;
};
