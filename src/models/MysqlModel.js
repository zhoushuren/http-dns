/**
 * Created by zhoujun on 16/8/23.
 * email :zhoujun247@gmail.com
 */
'use strict'

let mysql = {};

mysql.add_domian = function *( host_name,desc  ) {
	let nowTime = Math.ceil(new Date().getTime() / 1000);
	let sql = "insert into domain(host_name,`desc`,created_time,update_time,`status`) values('"+host_name+"','"+desc+"',"+nowTime+","+nowTime+",1);";
	let insertId = yield global.db.query(sql);
	return insertId;

}


mysql.add_ip = function *( domain_id , ips ) {

	let nowTime = Math.ceil(new Date().getTime() / 1000);
	let sql = "insert into ip(domain_id,`ip`,update_time) values";
	//let values ="("+domain_id+",inet_aton("+ip+"),"+nowTime+")";
	ips.forEach(ip=>{
		sql += "("+domain_id+",inet_aton('"+ip+"'),"+nowTime+"),";
	});
	sql = sql.substring(0,sql.length-1);
	//console.log(sql);
	let insertId = yield global.db.query(sql);
	return insertId;
}

export default mysql;