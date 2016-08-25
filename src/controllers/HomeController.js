/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
import co from 'co';
import redisModel from '../models/RedisModel';
import mysqlModel from '../models/MysqlModel';

async function getdomain( ctx, next ) {
	let hostname = ctx.request.body.hostname;
	let ips = await co(redisModel.getDomain(hostname));
	if(ips){
		ips = JSON.parse(ips);
		ctx.body = ips;
	}else{
		let ips =  await co(mysqlModel.get_domain(hostname));
		if(ips[0].length != 0){
			let newIps = [];
			ips[0].forEach(r=>{
				newIps.push({remarks:r.remarks,ip:r.ip})
			});
			redisModel.setDomain(hostname,newIps)
			ctx.body = newIps;
		}else{
			ctx.status = 504;
			ctx.body = '无效域名';
		}
	}

}

export {getdomain}