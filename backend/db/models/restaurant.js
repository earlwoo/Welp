'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    // url: DataTypes.STRING,
    categories: DataTypes.TEXT,
    transactions: DataTypes.TEXT,
    rating: DataTypes.DECIMAL,
    price: DataTypes.STRING,
    location: DataTypes.TEXT,
    phoneNum: DataTypes.STRING,
    coordinates: DataTypes.TEXT,
    photos: DataTypes.TEXT
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Review, { foreignKey: 'restId' })
  };
  return Restaurant;
};
