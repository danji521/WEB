// express模块
const express = require('express');


// 创建服务器
const app = express();
// 创建路由
const home = express.Router();

// 创建二级路由
home.get('/index', (req, res, next) => {
	res.send("欢迎来到首页")
})













// 创建一级路由
app.use('/home', home)












// 监听端口
app.listen(3000)
console.log("服务器启动成功")
