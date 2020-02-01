const equipment = (sequelize, DataTypes) => {
  const Equipment = sequelize.define('equipment', {
    name: {
      type: DataTypes.STRING,
        unique: true,
      },
  });
  return Equipment;
};
export default equipment();
