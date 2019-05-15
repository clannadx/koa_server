const fs = require('fs');
const timestampToTime = require('../utils/utils')
module.exports=server =>{
  server.use(async (ctx,next) =>{
    await fs.appendFile('./log',`[${timestampToTime(Date.now())}] ${ctx.method} ${ctx.url}\r\n`,err =>{
      if(err){
        console.log(err)
      }
    })
    await next();
  })
}