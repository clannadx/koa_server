const Router = require('koa-router');
let router = new Router();

router.get('', async ctx => {
  aa
  // let aaa = await ctx.db.execute(['SELECT COLLEGE_ID from college WHERE COLLEGE_ID = 1','SELECT COLLEGE_ID from college WHERE COLLEGE_ID = 2']);
  ctx.body = 'aaa'
})


module.exports = router.routes();
