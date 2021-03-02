// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

app.get('/request', (req, res, next) => {
	req.name = "张三";
	next();
})

app.get('/request', (req, res) => {
	res.send(req.name)
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功 http://localhost:3000/');


// 中间件意思就是 同路径可以 分开处理   用next()  就是下一个的意思  直到没有这个