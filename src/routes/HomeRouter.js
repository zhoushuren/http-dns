/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
import Router from 'koa-router';
import {getdomain} from '../controllers/HomeController';

const router = new Router({prefix: '/home'});

router.post('/multi_dns_resolve/:client_ip',  (ctx, next) =>{
	
	return getdomain(ctx, next);
});


export default router;

