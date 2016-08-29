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

async function update_domain( ctx,next  ) {
	let host_name = ctx.request.body.host_name;
	let desc = ctx.request.body.desc;
	let id = ctx.request.query.id;

	if(host_name || desc){
		let params = {host_name,desc,id};
	let result =  await co(mysqlModel.update_domain(params));
		ctx.body = result;
	}


}

async function update_ip( ctx,next  ) {
	let ip =  ctx.request.body.ip;
	let remarks =  ctx.request.body.remarks;
	let id =  ctx.request.body.id;
	if(ip){
		let params = {ip,remarks,id};
	  let result =  await co(mysqlModel.update_ip(params));
		return result;
	}
}

async function get_domain_list( ctx,next ) {
	let domain_list = await co(mysqlModel.get_domain_list());
	ctx.body = domain_list;
}

async function get_update_domain( ctx,next ) {
	let id = ctx.request.query.id;
	let domain_list = await co(mysqlModel.get_update_domain(id));
	ctx.body = domain_list;
}

async function delete_ip (ctx,next  ) {
	let id = ctx.request.query.id;
	let ips = await co(mysqlModel.delete_ip(id));
	ctx.body = ips;
}

export {
	add_domain,
	update_domain,
	get_domain_list,
	get_update_domain,
	update_ip,
	delete_ip
}