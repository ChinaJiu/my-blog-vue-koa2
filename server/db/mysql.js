const mysql = require('mysql');
const sequelize = require('sequelize');

const { MYSQL_CONF } = require('../conf/db')

const { } = require('../conf/db').MYSQL_CONF

const con = mysql.createConnection(MYSQL_CONF)
con.connect()
function exec (sql) {
  return new Promise ((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

const sq = new sequelize(MYSQL_CONF.database, MYSQL_CONF.username, MYSQL_CONF.password, {
  host: MYSQL_CONF.host,
  dialect: mysql,
  pool: {
    max: 5,
    min: 0,
    idle: 3000
  }
})

module.exports = {
  exec
}