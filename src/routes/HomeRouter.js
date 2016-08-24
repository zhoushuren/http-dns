/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
import Router from 'koa-router';
import Mysql from '../models/MysqlModel'

const router = new Router();

router.post('/multi_dns_resolve/:client_ip',  (ctx, next) =>{



	mysql.setDomain();
	
	ctx.body = 'hello dns';
});


export default router;

