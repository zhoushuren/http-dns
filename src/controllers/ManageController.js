/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */

'use strict'
import co from 'co';
import mysqlModel from '../models/MysqlModel';

async function  add_domain( ctx,next ) {
	await co(function *() {
		console.log( yield global.db.query("select 1+2 as qqq") );
		let insertId = yield global.db.query("select 1+2 as qqq")
	});


	 ctx.body = 1111;
}


export {
	add_domain
}