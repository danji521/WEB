// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// post参数解析
const bodyParser = require('body-parser');
// 向其他服务器端请求数据的模块解决跨域问题
const request = require('request');
const fs = require('fs');
// 创建web服务器
const app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));



// 1  html
app.get('/base', (req, res) => {
	res.send({
		name: 'zhangsan',
		age: 30
	})
});

// 2 3  html  
app.post('/user', (req, res) => {
	res.send(req.body)
});


// 4  html
app.post('/base', (req, res) => {
	res.send(req.body)
});

// 5  html
// 获取用户列表信息
app.get('/users', (req, res) => {
	res.send('当前是获取用户列表信息的路由');
});
// // 获取id为1的用户信息
app.get('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在获取id为${id}用户信息`);
});
// 删除ID为10的用户信息
app.delete('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在删除id为${id}用户信息`);
});
// 修改ID为10的用户信息
app.put('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在修改id为${id}用户信息`);
});




// 6  解决非同源访问
app.get('/server', (req, res) => {
	request('http://localhost:3001/cross', (err, respons, body) => {
		res.send("解决跨域问题OK");
	})
});












// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');
