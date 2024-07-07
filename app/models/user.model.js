export default (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    phone:{
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  });

  return User;
};