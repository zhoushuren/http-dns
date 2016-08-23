/**
 * Created by zhoujun on 16/8/22.
 * email :zhoujun247@gmail.com
 */

const Koa = require('koa');
const app = new Koa();
const router = require('./routes/index');


app
.use(router.routes())
 .use(router.allowedMethods());


app.listen(3000);
