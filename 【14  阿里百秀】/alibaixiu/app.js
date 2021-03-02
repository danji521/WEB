const express = require('express'); // express模块
const path = require('path'); //路径模块


// 创建服务器
const app = express();
// 数据库
require('./model/connect')
// 静态资源访问
app.use(express.static(path.join(__dirname, 'public')))

// 导入路由
const login = require('./routes/login');
const admin = require('./routes/admin');

  
// 拦截所有路由
app.use('/login', login);
app.use('/admin', admin)





















// 监听端口
app.listen(3000)
console.log("服务器启动成功")
