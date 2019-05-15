const Mysql = require('mysql-pro');

const db = new Mysql({
  host:'localhost',
  port:3306,
  user:'root',
  password:'saber',
  dataBase:'school'
  
});
db.excute = async sql =>{
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
}
module.exports = db