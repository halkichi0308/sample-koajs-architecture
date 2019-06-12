import { Context, Request, Response } from 'koa';
import Router from 'koa-router';


const router = new Router()

router
  .get('/', async (ctx: Context, next: Function) => {
    ctx.body = 'users'
  })


export default router
