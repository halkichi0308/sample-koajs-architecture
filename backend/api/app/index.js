var Koa = require('koa');
var Router = require('koa-router');
var Connect = require('@util/db');

import { connectDB } from "../db/dbs"

var app = new Koa();
var router = new Router();

/* もっとスマートにしたい */
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World!!';
});
router.get('/users', (ctx, next)=>{
  ctx.body = 'This is /user page.';
});
router.get('/users/:id', (ctx, next)=>{
  ctx.body = `thx! We got ${ctx.params.id}.`;
});

/* 別ファイルにしたい */
router.get('/db/:id', (ctx, next)=>{
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'passwd'
  })
  connection.connect((err)=>{
    if(err){
      console.log(`err: ${err.stack}`);
      return
    }

    console.log(`connection: ${connection.threadId}`);
  })
  var results_from_db
  connection.query('SELECT * FROM dev.counsel WHERE id = ?;',[ctx.params.id],(err, results, fields)=>{
      if(err)console.log(err)
      console.log(results)
  })
  return ctx.body = `connection success.`
})
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
console.log('-server running-');