const Router = require('koa-router');
let router = new Router();

router.get('',async ctx =>{
  ctx.body = '1111'
})


module.exports= router.routes();