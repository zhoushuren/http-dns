/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */

'use strict'
import co from 'co';
import mysqlModel from '../models/MysqlModel';
import redisModel from '../models/RedisModel';
async function  add_domain( ctx,next ) {
	let hostname = ctx.request.body.hostname;
	let desc = ctx.request.body.desc;
	let ips = typeof ctx.request.body.ips == 'string' ? eval(ctx.request.body.ips ) : ctx.request.body.ips ;
	let domainObj = await co(mysqlModel.add_domian(hostname,desc));
	let domain_id =domainObj[0].insertId;
	let ipObj = await co(mysqlModel.add_ip(domain_id,ips));

	if(domain_id >0 &&  ipObj[0].insertId >0){
		await co(redisModel.setDomain(hostname,ips));
		ctx.body = {result: true,msg:'添加成功'};
	}else{
		ctx.body = {result: false,msg:'添加失败'};
	}

}


export {
	add_domain
}