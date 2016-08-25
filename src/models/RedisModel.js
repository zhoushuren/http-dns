/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
var co = require('co');
var redisClient = require('redis').createClient();
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);




//export function  getdns( domain ) {
//	return
//	co(function* () {
//		yield redisCo.get(domain); // logs 33
//	});
//}


let redisModel = {};

redisModel.setDomain = function * ( host_name,ips ) {

	let key = 'httpdns:domain'+ host_name
	yield redisCo.set(key,JSON.stringify(ips));

	var re = yield redisCo.get(key);

	console.log(re);
}


export default redisModel;