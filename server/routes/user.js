const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  let query = ctx.query;
  let {username, password} = ctx.request.body
  ctx.body = {
    error: 0,
    username,
    password
  }
})

module.exports = router
