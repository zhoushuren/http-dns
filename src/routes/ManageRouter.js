/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
import Router from 'koa-router';
import {add_domain,update_domain,get_domain_list,get_update_domain,update_ip,delete_ip} from '../controllers/ManageController';
import co from 'co';

const router = new Router({prefix: '/manage'});


/*
 * manager port
 *
 * */

router.post('/add_domain',  (ctx,next)=>{
	return add_domain(ctx,next);
});

router.post('/update_domain', function (ctx, next) {
	return update_domain(ctx,next);
});
router.post('/update_ip', function (ctx, next) {
	return update_ip(ctx,next);
});

router.get('/delete_ip',function ( ctx, next ) {
	return delete_ip(ctx, next )
});

router.get('/get_domain_list', function (ctx, next) {
	return get_domain_list(ctx, next);
});

router.get('/get_domain_detail', function (ctx, next) {

	ctx.body = 'hello dns';

});

router.get('/get_update_domain', function (ctx, next) {
	return get_update_domain(ctx, next);

});
export default  router;