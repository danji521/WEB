// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));
