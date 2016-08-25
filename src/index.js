/**
 * Created by zhoujun on 16/8/22.
 * email :zhoujun247@gmail.com
 */
'use strict'
import  Koa from 'koa';
const app = new Koa();
import HomeRouter from './routes/HomeRouter';
import ManageRouter from './routes/ManageRouter';
import mysql from 'mysql-co';
import {Mysqloptions,appConfig} from './config/config';
import bodyparser from 'koa-bodyparser';



app.use(async function mysqlconn( ctx,next ) {
	global.db = await mysql.createConnection(Mysqloptions);
	await global.db.query('SET SESSION sql_mode = "TRADITIONAL"');

	await next();

	global.db.end();
});

app.use(bodyparser());

app.use(ManageRouter.routes())
	.use(ManageRouter.allowedMethods());

app.listen(3000);
