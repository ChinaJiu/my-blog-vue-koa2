const { exec } = require('../db/mysql')

const login = async (username, password) => {
  let sql = `
    select username, realname from users where username='${username}' and password='${password}'
  `
  let rows = await exec(sql);
  return rows[0] || {}
}

module.exports = {
  login
}