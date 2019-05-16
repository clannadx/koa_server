const Mysql = require('mysql-pro');

const db = new Mysql({
  mysql:{
    host:'localhost',
    port:3306,
    user:'root',
    password:'saber',
    database:'blog'
  }

});

db.execute = async sql =>{
  await db.startTransaction();
  let res;
  if(typeof sql =='string'){
    res=await db.executeTransaction(sql);
  } else {
    sql.forEach(async item =>{
      res= await db.executeTransaction(item);
    })
  }
  await db.stopTransaction();
  return res;
}
module.exports = db
