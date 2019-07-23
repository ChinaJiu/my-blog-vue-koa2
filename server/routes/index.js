// const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

// module.exports = router

const Router = require('koa-router');
const UserController = require('../controller/user')

const router = new Router({
  prefix: '/api/v1'
})

/**
 * 用户接口
 */
// 创建用户
router.post('/createUser', UserController.createUser);
// 登录
router.post('/login', UserController.postLogin);
// 获取用户信息
router.get('/userInfo', UserController.getUserName);


module.exports = router;



