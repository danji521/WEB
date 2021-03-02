// fs文件操作模块
const fs = require('fs');
// 路径拼接
const path = require('path');




// 1.读取内容
fs.readFile('./reset.txt', 'utf8', (err, doc) => {
	// 如果文件读取出错err 是一个对象 包含错误信息
	// 如果文件读取正确 err是 null
	// doc 是文件读取的结果
	console.log(err);
	console.log(doc);
});


// 2  写入内容
fs.writeFile('./reset.txt', '即将要写入的内容', err => {
	if (err != null) {
		console.log(err);
		return;
	}

	console.log('文件内容写入成功');
})


// 路径拼接
const finalPath = path.join('public', 'uploads','avatar');
console.log(finalPath);

// 文件导出
var a="a";
module.exports = a;
// 文件导入
const a = require('a')