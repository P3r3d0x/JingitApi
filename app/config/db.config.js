export default {
    HOST: "database-1.cb222gmo6xrc.ap-south-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "Shivvani22",
    DB: "jingit",
    dialect: "mysql", 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };