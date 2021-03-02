// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
});

// 使用规则创建集合
const User = mongoose.model('fangfa1', userSchema);
// 更新一条name信息为  李狗蛋
User.updateOne({_id: '6034819917ca3329e0c5cc8a'}, { name: '李狗蛋'}).then(result => console.log(result))
// 更新全部age信息为300
// User.updateMany({}, {name:"王五"}).then(result => console.log(result))