const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const app = http.createServer();
app.on('request', (req, res) => {
	// 获取用户的请求路径
	let pathname = url.parse(req.url).pathname;
	pathname = pathname == '/' ? '/default.html' : pathname;
	// 将用户的请求路径转换为实际的服务器硬盘路径
	let realPath = path.join(__dirname, 'public' + pathname);
	// mime 插件 动态的把报文设置成相应的编码文件
	let type = mime.getType(realPath)
	// 读取文件
	fs.readFile(realPath, (error, result) => {
		// 如果文件读取失败
		if (error != null) {
			res.writeHead(404, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('文件读取失败');
			return;
		}
		res.writeHead(200, {
			'content-type': type
		})
		res.end(result);
	});
});
app.listen(3000);
console.log('服务器启动成功 请访问  localhost:3000')











// 知识点
// 获取请求方式
const method = req.method.toLowerCase();
// 获取请求路径
const pathname = url.parse(req.url).pathname;
// 报文设置
res.writeHead(200, {
	'content-type': 'text/html;charset=utf8'
});
// 请求报文
req.headers
// GET参数解析
let {
	query,
	pathname
} = url.parse(req.url, true);
console.log(query.name)
console.log(query.age)
// POST参数解析
const querystring = require('querystring');
let postParams = '';
req.on('data', params => {
	postParams += params;
});
req.on('end', () => {
	console.log(querystring.parse(postParams));
});
