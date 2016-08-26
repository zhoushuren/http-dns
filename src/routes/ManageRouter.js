/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
import Router from 'koa-router';
import {add_domain,update_domain} from '../controllers/ManageController';
import co from 'co';

const router = new Router({prefix: '/manage'});


/*
 * manager port
 *
 * */

router.post('/add_domain',  (ctx,next)=>{
	return add_domain(ctx,next);
});

router.put('/update_domain', function (ctx, next) {
	return update_domain(ctx,next);
});


router.delete('/delete',function ( ctx, next ) {

});

router.get('/get_domain_list', function (ctx, next) {

	ctx.body = 'hello dns';

});

router.get('/get_domain_detail', function (ctx, next) {

	ctx.body = 'hello dns';

});


export default  router;