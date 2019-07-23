const db = require('../db/mysql');
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/user');

User.sync({force: false});

class UserModel {
  /**
   * 创建用户
   * @param user
   * @return {@Promise<boolean>}
   */
  static async createUser (user) {
    const { username, password } = user;

    await User.create({
      username,
      password
    })

    return true;
  }

  /**
   * 查询用户
   * @param username
   * @returns {Promise<>}
   */
  static async findUserByName(username) {
    return await User.findOne({
      where: {
        username
      }
    })
  }
}

module.exports = UserModel;
