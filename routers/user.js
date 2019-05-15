const Router = require('koa-router');

const router = new Router();


router('aa',async(ctx) =>{
  ctx.body = '2222'
})


module.exports = router.routes();