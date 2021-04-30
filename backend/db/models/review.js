'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    restId: DataTypes.INTEGER,
    content: DataTypes.STRING(500),
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Restaurant, { foreignKey: 'restId' })
  };
  return Review;
};
