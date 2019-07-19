const router = require('koa-router')()

const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck }  = require('../middleware/loginCheck')

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  let author = ctx.query.author || ''
  let keyword = ctx.query.keyword || ''

  if(ctx.query.isadmin) {
    if(ctx.session.username == null) {
      ctx.body = new ErrorModel('未登录')
      return
    }
    // 强制查询自己的博客
    author = ctx.session.username
  }
  const listData = await getList(author, keyword)
  ctx.body = new SuccessModel(listData)
})

module.exports = router
