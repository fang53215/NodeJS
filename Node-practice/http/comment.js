var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content':'ceshi111',
	'cid':348
})

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=e513b726-a17a-4dd8-a4bc-da8f3f3c8c9e; imooc_isnew_ct=1490691144; loginstate=1; apsid=liNWQ3YjMwY2EyYzkyZWE3MjdlOWIwZDg0MDM3MWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzA0NjA0OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzOTM1MDcwNjNAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGYzOGE3NWJiYzE4YmRjYzg0OWUyNDE0ZDYyZWUzMDMx4%2BQtWuPkLVo%3DOT; PHPSESSID=mf1qk84rb6ojcqkqhnmhp2r1n6; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1513133924,1513306678,1513649441,1513826167; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1513838183; imooc_isnew=2; cvde=5a3b27723b230-39',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('Status:' + res.statusCode)
	console.log('headers:' + JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('finished!!')
	})
})

req.on('error',function(e){
	console.log('Error:' + e.message)
})

req.write(postData)
req.end()
