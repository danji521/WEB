// express 框架
const express = require('express');

// 创建服务器
const app = express();


// 文件处理
app.get('/index', (req, res, next) => {
	fs.readFile('./01.js', 'utf8', (err, result) => {
		if (err != null) {
			console.log("读取NG")
			next(err)
		} else {
			res.send(result)
		}
	})
})


// 错误处理
app.use((err, req, res, next) => {
	res.status(500).send(err, message)
})










// 监听端口
app.listen(3000);
console.log("服务器启动成功  http://localhost:3000/")
