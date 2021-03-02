// express模块
const express = require('express');
// 创建服务器
const app = express();



// 获取get参数
app.get('/index',(req, res, next) => {
	res.send(req.query);
})










// 监听端口
app.listen(3000);
console.log("服务器启动成功")
