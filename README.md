## HttpDns服务。

#### 部署项目

* 环境要求: nodejs(4.4+) ,redis,mysql

```
npm install
```


* docker 安装redis

```
docker pull redis
 
docker run -h httpDnsRedis --name dnsReids -d -p6379:6379/TCP redis
```

* 使用的模块:
    1. koa2
    2. koa-router
    3. co-redis
    4. co-mysql
    
* 简述实现方案:
    * 域名解析列表存Mysql,缓存redis里。域名解析查询接口读redis,增删改Mysql同时更新reids。
    * 域名解析接口一个: ``` http://dnsDoMain/multi_dns_resolve/:client_ip ``` 
    * 请求方式:POST
    * 参数1: client_ip (Sting类型),客户端IP地址。
    * 参数2: domains  (Array),需要倍解析的域名列表
    * 返回值: 
    ```{
          result: true,
            domainList:[
                {
                    domain: 'www.ffrj.net',
                    ip:10.0.0.1
                },
                {
                    domain: 'open.ffrj.net',
                    ip:10.0.0.2
                },
            ]
         }   
    ```
    
#### 管理接口:

    查询域名解析列表:
    