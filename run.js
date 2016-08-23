/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict';
require('babel-register')({
	plugins: ['transform-async-to-generator']
});
require('./src/index.js')