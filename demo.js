#!/usr/bin/env node

var fs = require('fs') //引入文件系统模块

var dirName = process.argv[2] //接收参数作为文件名

//判断文件夹是否存在，当文在夹已存在时该API返回true
if(fs.existsSync(`./${dirName}`)){
	console.log('文件夹已存在')
	process.exit(1)
}else{
	fs.mkdirSync("./" + dirName) //mkdir dirName
	fs.mkdirSync("./" + dirName + "/css") //mkdir css
	fs.mkdirSync("./" + dirName + "/js") //mkdir js

	//写入内容
	fs.writeFileSync(`./${dirName}/index.html`,"<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>\n")

	fs.writeFileSync(`./${dirName}/css/style.css`,"h1{color: red;}\n")	

	fs.writeFileSync(`./${dirName}/js/main.js`,'var string = "Hello World"\nalert(string)\n')
	console.log('创建文件成功')
	process.exit(0)
}

