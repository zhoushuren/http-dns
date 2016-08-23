/**
 * Created by zhoujun on 16/8/22.
 * email :zhoujun247@gmail.com
 */


var Router = require('koa-router');

var router = new Router();

router.post('/multi_dns_resolve/:client_ip', function (ctx, next) {
	console.log(11);
	ctx.body = '1111';

});

module.exports = router;
