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
    let user = ctx.request.body;
    const {username, password} = user;

    let userData = await userModel.findUserByName(username);
    console.log('userData', userData.password)
    // 判断用户是否存在
    if(userData) {
      // 判断前端传递的用户密码是否与数据库密码一致
      if(bcrypt.compareSync(password, userData.password)) {
        // 用户token
        const userToken = {
          username: userData.username,
          id: userData.id
        }
        const token = jwt.sign(userToken, secret.sign, {expiresIn: '1h'})  // 签发token
        ctx.body = {
          message: '登录成功！',
          data: {
              id: userData.id,
              username: userData.username,
              token: token
          },
          code: 200
        }
      } else {
        ctx.body = {
          code: -1,
          message: '用户名或密码错误'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '用户名不存在'
      }
    }
  }

  /**
   * 获取用户信息
   * @param ctx
   * @returns {Promise<>}
   */
  static async getUserName(ctx) {
    let username = ctx.query.username;

    if(username) {
      let userData = await userModel.findUserByName(username)
      ctx.body = {
        code: 200,
        data : {
          userData
        },
        message: '查询成功'
      }
    }else{
      ctx.body = {
        code: -1,
        message: '用户名必须传'
      }
    }
  }
}

module.exports = UserController
