const Koa = require('koa');
const Router = require('koa-router');
const Body = require('koa-better-body');
const convert = require('koa-convert');
const static = require('koa-static-cache');
const session = require('koa-session');
const config = require('./config');
// const log = require('./libs/log');
const error = require('./libs/error_handle');
const db = require('./libs/db');


const server = new Koa();

//错误处理
error(server);  //所有请求都会通过这个中间件 只是存在先处理和后处理的区别
// log(server);
server.use(async (ctx, next) => {
  ctx.db = db;
  await next();
})
//post
server.use(convert(Body({
  upload: config.uploadDir
})));

server.use(static(config.wwwDir));
//session
server.keys = config.secret_key;
server.use(session({}, server));

//路由
const router = new Router();

router.use('/', require('./routers/index'));
// router.use('/user',require('./routers/user'));
server.use(router.routes());


server.listen(config.port);
