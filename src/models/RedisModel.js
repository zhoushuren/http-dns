/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */

var co = require('co');
var redisClient = require('redis').createClient();
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);




export function  getdns( domain ) {
	return
	co(function* () {
		yield redisCo.get(domain); // logs 33
	});
}

