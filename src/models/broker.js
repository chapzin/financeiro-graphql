'use strict';
module.exports = (sequelize, DataTypes) => {
  const Broker = sequelize.define(
    'Broker',
    {
      name: DataTypes.STRING,
      allowNull: false
    },
    {}
  );
  Broker.associate = function(models) {
    this.hasMany(models.Investment);
  };
  return Broker;
};
