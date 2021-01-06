const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const Pilot = sequelize.define(
    'Pilot',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: async pilot => {
          if (pilot.password) {
            pilot.password_hash = await bcrypt.hash(pilot.password, 8)
          }
        }
      }
    }
  )

  Pilot.associate = models => {
    Pilot.belongsTo(models.Fly, { foreignKey: 'fly_id' })    
  };

  Pilot.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  };
  return Pilot

};