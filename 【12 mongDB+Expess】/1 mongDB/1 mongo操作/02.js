// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');



// 数据库连接
mongoose.connect('mongodb://localhost/playground', {
		useNewUrlParser: true
	})
	.then(() => console.log('数据库连接成功'))
	.catch(err => console.log(err, '数据库连接失败'));


// 创建集合方法一
const courseSchema1 = new mongoose.Schema({ //创建集合规则
	name: String,
	author: String,
	isPublished: Boolean
});
const Course1 = mongoose.model('fangFa1', courseSchema1) //创建集合名称
Course1.create({ //创建文档
	name: '张三',
	author: '黑马讲师',
	isPublished: false
})

// 创建集合方法二
const courseSchema2 = new mongoose.Schema({ // 创建集合规则
	name: String,
	author: String,
	isPublished: Boolean
});
const Course2 = mongoose.model('fangFa2', courseSchema2) // 使用规则创建集合
const course = new Course2({ // 创建文档
	name: 'node.js基础',
	author: '黑马讲师',
	isPublished: true
}).save();
