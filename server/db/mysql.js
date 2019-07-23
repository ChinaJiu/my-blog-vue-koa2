const Sequelize = require('sequelize');
const { database, user, password, host } = require('../conf/db').MYSQL_CONF;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

module.exports = {
  sequelize
}