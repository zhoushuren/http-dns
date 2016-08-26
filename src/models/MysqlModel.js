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
	let sql = "insert into ip(domain_id,`ip`,update_time,remarks) values";

	ips.forEach(i=>{
		sql += "("+domain_id+",inet_aton('"+i.ip+"'),"+nowTime+",'"+i.remarks+"'),";
	});
	sql = sql.substring(0,sql.length-1);
	//console.log(sql);
	let insertId = yield global.db.query(sql);
	return insertId;
}

mysql.get_domain = function* ( host_name ) {
	let sql = "select host_name,`desc`,created_time,inet_ntoa(ip) as ip,remarks,d.update_time from  domain d ";
	sql+="left join ip on d.id=ip.domain_id where d.`host_name`='"+host_name+"'";
	let ips = yield global.db.query(sql);
	return ips;
}

mysql.update_domain = function *( params ) {
	let sql = "update domain set ";
	for (let param in params){
		sql += param + '=' + params[param] + ','
	}
	sql = sql.substr(0,sql.length -1);
	sql += 'where host_name=' + params.hostname;
	global.db.query(sql);

}

mysql.update_ip = function *( params ) {
	let sql = "update ip set ";
	for (let param in params){
		sql += param + '=' + params[param] + ','
	}
	sql = sql.substr(0,sql.length -1);
	sql += 'where domain_id=' + params.domain_id;
	global.db.query(sql);
}

export default mysql;