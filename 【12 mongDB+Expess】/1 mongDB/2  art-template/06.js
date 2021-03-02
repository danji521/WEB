const template = require('art-template');
const path = require('path');
// 第三方日期处理模块
const dateFormat = require('dateformat');

// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 处理日期格式的方法
template.defaults.imports.dateFormat = dateFormat;

// 配置模板的默认后缀
template.defaults.extname = '.html';

const html = template('06.art', {
	time: new Date()
});

console.log(html);


// 返回示例
const http = require('http');
const app = http.createServer();
app.on('request', (req, res) => {
	res.end(html)
});
app.listen(3000);
console.log('服务器启动成功 请访问  localhost:3000')
