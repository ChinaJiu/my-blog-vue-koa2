const mysql = require('mysql');
const sequelize = require('sequelize');

const { MYSQL_CONF } = require('../conf/db')

const { database, user, password, host } = require('../conf/db').MYSQL_CONF

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
console.log(database, user, password, host)

const sq = new sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 3000
  }
})

module.exports = {
  exec
}