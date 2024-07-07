import config from '../config/db.config.js'
import Sequelize from 'sequelize';
import userModel from '../models/user.model.js';
import roleModel from '../models/role.model.js';
import Op from 'sequelize';
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;
db.user = userModel(db.sequelize, db.Sequelize);
db.role = roleModel(db.sequelize, db.Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.ROLES = ["user", "admin", "moderator"];

export default db;