const logger = require('./log4js')
module.exports = server => {
  server.use(handler);
}

async function handler(ctx, next) {
  try {
    await next();
  } catch (err) {
    logger.error(err);
    console.log(err);
    ctx.body = '服务器正在维护中'
  }
}
