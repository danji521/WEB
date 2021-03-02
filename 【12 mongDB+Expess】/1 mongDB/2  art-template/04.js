// 引入模板插件
const template = require('art-template');
const path = require('path');

// 获取模板
const views = path.join(__dirname, 'views', '04.art');
// 使用模板
const html = template(views, {
	msg: '我是首页'
})
// 输出
// console.log(html);


// 返回示例
const http = require('http');
const app = http.createServer();
app.on('request', (req, res) => {
	res.end(html)
});
app.listen(3000);
console.log('服务器启动成功 请访问  localhost:3000')
