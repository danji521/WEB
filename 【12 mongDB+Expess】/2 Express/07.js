// express模块
const express = require('express');


// 创建服务器
const app = express();


// 导入路由
const home = require('./router/home');
const admin = require('./router/admin');



// 拦截所有路由
app.use('/home', home);
app.use('/admin', admin)












// 监听端口
app.listen(3000)
console.log("服务器启动成功")
