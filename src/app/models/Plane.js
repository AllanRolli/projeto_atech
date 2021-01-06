module.exports = (sequelize, DataTypes) => {
    const Plane = sequelize.define('Plane', {
      name: DataTypes.STRING      
    })
    Plane.associate = models => {
      Plane.belongsTo(models.Fly, { foreignKey: 'fly_id' })      
    };
    return Plane  
  };
  