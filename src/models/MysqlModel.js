/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
var wrapper = require('co-mysql'),
	mysql = require('mysql'),
	co = require('co');

var options = {
	host: '127.0.0.1',
	username:  'root'
}

var pool = mysql.createPool(options),
	p = wrapper(pool);
