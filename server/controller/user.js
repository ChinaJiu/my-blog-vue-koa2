const userModel = require('../model/user');
const jwt = require('jsonwebtoken');
const secret = require('../conf/secret');
const bcrypt = require('bcryptjs');

class UserController {
  /**
   * 创建用户
   * @param ctx
   * @returns {Promise<void>}
   */
  static async createUser(ctx) {
    let user = ctx.request.body
    let {username, password} = user;

    if(username && password) {
      const isHasUser = await userModel.findUserByName(username);
    //  console.log('b',b);
      if(isHasUser) {
        ctx.body = {
          code: 412,
          message: '用户已经存在'
        }
      } else {
        const salt = bcrypt.genSaltSync();
        // 加密密码
        const hash = bcrypt.hashSync(password, salt);
        user.password = hash
        console.log('user------', user);
        await userModel.createUser(user);
        const newUser = await userModel.findUserByName(username)

        // 签发token
        const userToken = {
          username: newUser.username,
          id: newUser.id
        }
        const token = jwt.sign(userToken, secret.sign, {expiresIn: '1h'});

        ctx.body = {
          code: 200,
          message: '创建成功',
          bean: {
              token
          }
        }
      }
    } else {
      ctx.body = {
        code: 412,
        message: '参数错误'
      }
  }
  }

  /**
   * 用户登录
   * @param ctx
   * @returns {Promise<void>}
   */
  static async postLogin (ctx) {

  }
}

module.exports = UserController
