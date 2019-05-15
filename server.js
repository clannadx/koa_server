const Koa = require('koa');
const Router = require('koa-router');
const Body = require('koa-better-body');
const convert = require('koa-convert');
const static = require('koa-static-cache');
const session = require('koa-session');
const config = require('./config');
const log = require('./libs/log');
const error = require('./libs/error_handle');

const server = new Koa();

//错误处理
error(server);
log(server);

server.keys = config.secret_key;
server.use(convert(Body({
  upload:config.uploadDir
})));

server.use(static(config.wwwDir));
server.use(session({},server));

//路由
const router = new Router();

router.use('/', require('./routers/index'));
// router.use('/user',require('./routers/user'));
server.use(router.routes());


server.listen(config.port);