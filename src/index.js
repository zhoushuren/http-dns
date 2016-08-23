/**
 * Created by zhoujun on 16/8/22.
 * email :zhoujun247@gmail.com
 */

import  Koa from 'koa';
const app = new Koa();
import router from './routes/index';


app
.use(router.routes())
 .use(router.allowedMethods());


app.listen(3000);
