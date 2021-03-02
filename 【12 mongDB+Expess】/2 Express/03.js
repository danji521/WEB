// 引入express
const express = require('express');



// 创建服务器
const app = express();

// 今天系统维护哈哈
app.use('/admin', (req, res, next) => {
	// 今天系统维护哈哈
	res.send('今天系统维护哈哈')
})







// 用户登录判断
app.use('/admin', (req, res, next) => {
	// 用户没有登录
	let isLogin = true;
	// 如果用户登录
	if (isLogin) {
		// 让请求继续向下执行
		next()
	} else {
		// 如果用户没有登录 直接对客户端做出响应
		res.send('您还没有登录 不能访问/admin这个页面')
	}
})

// 已经登录
app.get('/admin', (req, res, next) => {
	// 如果用户没有登录 直接对客户端做出响应
	res.send('您已经登录 可以访问当前页面')
})


// 如果访问其他页面报错
app.use((req, res, next) => {
	// 为客户端响应404状态码以及提示信息
	res.status(404).send('当前访问的页面是不存在的')
})








// 监听接口
app.listen(3000)
console.log("服务器启动成功  http://localhost:3000/")
