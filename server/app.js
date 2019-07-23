const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const jwt = require('koa-jwt')
const cors = require('koa-cors');
// const session = require('koa-generic-session');
// const redis = require('koa');
// const redisStore = require('koa-redis');

// const { REDIS_CONF } = require('./conf/db')

const index = require('./routes/index');

const secret = require('./conf/secret')
// const users = require('./routes/users')
// const blog = require('./routes/blog')
// const user = require('./routes/user')

// error handler
onerror(app)

// 跨域
app.use(cors());
// jwt

app.use(jwt({secret: secret.sign}).unless({path: [/^\/api\/v1\/login/, /^\/api\/v1\/createUser/]}))

// middlewares

// 解析bodyparser
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// 响应json
app.use(json())
// 输出请求日志的功能
app.use(logger())
// 加载前端文件或后端Fake数据
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// session
// app.keys = ['WJiol#23123_'];
// app.use(session({
//   cookie: {
//     path: '/',
//     httpOnly: true,
//     maxAge: 5000
//   },
//   store: redisStore({
//      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
//   })
// }))

// routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
// app.use(blog.routes(), blog.allowedMethods())
// app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
