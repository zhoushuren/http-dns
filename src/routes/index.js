/**
 * Created by zhoujun on 16/8/22.
 * email :zhoujun247@gmail.com
 */

//var domian = require('../models/DomainModel');
//var Router = require('koa-router');
import Router from 'koa-router';
const router = new Router();

router.post('/multi_dns_resolve/:client_ip', function (ctx, next) {

	ctx.body = 'hello dns';


});

/*
* manager port
* 
* */
router.post('/add_domain', function (ctx, next) {

	ctx.body = 'hello dns';

});

router.put('/update_domain', function (ctx, next) {

	ctx.body = 'hello dns';


});


router.delete('/delete',function ( ctx, next ) {
	
});

router.get('/get_domain_list', function (ctx, next) {

	ctx.body = 'hello dns';

});

router.get('/get_domain_detail', function (ctx, next) {

	ctx.body = 'hello dns';

});


module.exports = router;
