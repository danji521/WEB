// express模块
const express = require('express');
// 创建路由
const admin = express.Router();



// 创建二级路由
admin.get('/index', (req, res, next) => {
	res.send("欢迎来到首页")
})
admin.get('/list', (req, res, next) => {
	res.send("欢迎来到列表页")
})
admin.get('/add', (req, res, next) => {
	res.send("欢迎来到添加页")
})






module.exports = admin;
