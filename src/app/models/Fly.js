module.exports = (sequelize, DataTypes) => {
  const Fly = sequelize.define('Fly', {
    departure_time: DataTypes.DATE,
    arrived_time: DataTypes.DATE,
    status: DataTypes.STRING
  })
  Fly.associate = models => {
    Fly.belongsTo(models.Plane, { foreignKey: 'plane_id' })
    Fly.belongsTo(models.Pilot, { foreignKey: 'pilot_id' })
    Fly.belongsTo(models.City, { foreignKey: 'city_id' })
  };
  return Fly

};