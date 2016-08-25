/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'
var co = require('co');
var redisClient = require('redis').createClient();
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);


let redisModel = {};
redisModel.key = 'httpdns:domain:';

redisModel.setDomain = function * ( host_name,ips ) {

	let key = this.key + host_name
	yield redisCo.set(key,JSON.stringify(ips));

}

redisModel.getDomain = function * ( host_name ) {
	let key = this.key + host_name
	var re = yield redisCo.get(key);
	return re;
}

export default redisModel;