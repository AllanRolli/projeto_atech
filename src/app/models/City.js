module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        departure_city: DataTypes.STRING,
        destiny_city: DataTypes.STRING
    })
    City.associate = models => {
      City.belongsTo(models.Fly, { foreignKey: 'fly_id' })      
    };
    return City
  
  };