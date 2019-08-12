const Router = require('koa-router');
const UserController = require('../controller/v1/user')
const ArticleController = require('../controller/v1/article')
const CategoryController = require('../controller/v1/category')
const CommentController = require('../controller/v1/comment')
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

/**
 * 文章接口
 */
//创建文章
router.post('/article', ArticleController.createArticle)
//查询文章列表
router.get('/article', ArticleController.getArticleList)
//查询文章详情
router.get('/article/:id', ArticleController.getArticleDetail)
// 删除文章
router.delete('/article/:id', ArticleController.deleteArticle);
// 更改文章
router.put('/article/:id', ArticleController.updateArticle);

/**
 * 标签接口
 */
//创建标签
// router.post('/category', CategoryController.createCategory)

/**
 * 评论窗口
 */
//创建评论
router.post('/comment', CommentController.createComment)
//删除评论
router.delete('/comment/:id', CommentController.deleteComment)

module.exports = router;



