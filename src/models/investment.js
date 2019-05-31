'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define(
    'Investment',
    {
      name: DataTypes.STRING,
      allowNull: false
    },
    {}
  );
  Investment.associate = function(models) {
    this.belongsTo(models.Broker);
  };
  return Investment;
};
