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
	let sql = "select d.id as id,host_name,`desc`,created_time,inet_ntoa(ip) as ip,remarks,d.update_time from  domain d ";
	sql+="left join ip on d.id=ip.domain_id where d.`host_name`='"+host_name+"'";
	let ips = yield global.db.query(sql);
	return ips;
}

mysql.update_domain = function *( params ) {
	let sql = "update domain set ";
	for (let param in params){
		sql += '`'+param+  '`=' + '\''+ params[param] + '\'' + ','
	}
	sql = sql.substr(0,sql.length -1);
	sql += ' where id=' + '\''+params.id+'\'';
	let result =  yield global.db.query(sql);
	return result[0];

}

mysql.update_ip = function *( params ) {
	let sql = "update ip set ";
	//for (let param in params){
	//	if(param !='id')
	//	sql += param + '=' + '\''+params[param]+'\'' + ','
	//}
	sql += 'ip= inet_aton( '  + '\''+ params.ip +'\'' + '),';
	sql += 'update_time=' +  Math.ceil(new Date().getTime() / 1000);
	//sql = sql.substr(0,sql.length -1);
	sql += ' where id=' + params.id;
	console.log(sql);
	let result = yield global.db.query(sql);
	return result[0];
}

mysql.get_domain_list = function* (  ) {
	let sql = "select d.id as id,ip.id as ip_id, host_name,`desc`,created_time,inet_ntoa(ip) as ip,remarks,d.update_time from  domain d ";
	sql+="left join ip on d.id=ip.domain_id ";
	let domains = yield global.db.query(sql);
	return domains[0];
}
//获取修改的数据
mysql.get_update_domain = function* ( id ) {
	let sql = "select id ,host_name,`desc`,created_time,update_time from  domain ";
	sql+=" where `id`="+id;
	let ips = yield global.db.query(sql);
	return ips[0][0];
}

mysql.delete_ip = function* ( id ) {
	let sql = "delete from ip";
	sql+=" where `id`="+id;
	console.log(sql);
	let ips = yield global.db.query(sql);
	return ips[0];
}
export default mysql;