// express模块
const express = require('express');
// 创建路由
const admin = express.Router();



// 创建二级路由
admin.get('/index', (req, res, next) => {
	res.send("欢迎来到后台")
})






module.exports = admin;
