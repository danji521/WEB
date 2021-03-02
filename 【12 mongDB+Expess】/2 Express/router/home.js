// express模块
const express = require('express');

// 创建路由
const home = express.Router();




// 创建二级路由
home.get('/index', (req, res, next) => {
	res.send("欢迎来到首页")
})
home.get('/list', (req, res, next) => {
	res.send("欢迎来到列表页")
})
home.get('/add', (req, res, next) => {
	res.send("欢迎来到添加页")
})




module.exports = home;
