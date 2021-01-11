module.exports = (sequelize, DataTypes) => {
  const Fly = sequelize.define('Fly', {
    departure_time: DataTypes.DATE,
    arrived_time: DataTypes.DATE,
    status: DataTypes.STRING,
    departure_city: DataTypes.STRING,
    destiny_city: DataTypes.STRING
  })
  Fly.associate = models => {
    Fly.belongsTo(models.Plane, { foreignKey: 'plane_id' })
    Fly.belongsTo(models.Pilot, { foreignKey: 'pilot_id' })    
  };
  return Fly

};