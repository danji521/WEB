// express模块
const express = require('express');
// 创建路由
const login = express.Router();
// 服务器
const app = express();
//post请求
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}))

// 创建二级路由
login.post('', (req, res, next) => {
	res.send("欢迎来到后台")
})






module.exports = login;
