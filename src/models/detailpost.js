"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Allcode
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "categoryJobCode",
        targetKey: "code",
        as: "jobTypePostData",
      });
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "worktypeCode",
        targetKey: "code",
        as: "workTypePostData",
      });
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "salaryJobCode",
        targetKey: "code",
        as: "salaryTypePostData",
      });
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "joblevelCode",
        targetKey: "code",
        as: "jobLevelPostData",
      });
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "experienceJobCode",
        targetKey: "code",
        as: "expTypePostData",
      });
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "genderPostCode",
        targetKey: "code",
        as: "genderPostData",
      });
      DetailPost.belongsTo(models.Allcode, {
        foreignKey: "addressCode",
        targetKey: "code",
        as: "provincePostData",
      });
      // Post
      DetailPost.belongsTo(models.Post, {
        foreignKey: "postId",
        targetKey: "id",
        as: "postDetailData",
      });
    }
  }
  DetailPost.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      description: DataTypes.TEXT("long"),
      postId: DataTypes.INTEGER,
      categoryJobCode: DataTypes.STRING,
      addressCode: DataTypes.STRING,
      salaryJobCode: DataTypes.STRING,
      joblevelCode: DataTypes.STRING,
      worktypeCode: DataTypes.STRING,
      experienceJobCode: DataTypes.STRING,
      genderPostCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DetailPost",
      timestamps: false,
    }
  );
  return DetailPost;
};