const path = require('path');//处理路径
const fs = require('fs');//处理文件
const solc = require('solc');
/*
1.获取HelloWorld.sol路径
2.调用函数resolve
3.__dirname ：当前项目路径
  'constracts'  ：项目在当前哪个文件夹下
  'HelloWorld.sol'  ：合约名字
*/
const filepath = path.resolve(__dirname,'constracts','Lottery.sol');
//console.log(filepath);
/*
  读取文件
*/
const source = fs.readFileSync(filepath,"utf8");
//console.log(source);
/*
  编译文件
*/
//solc.compile(source,1);
/*将文件导出*/
//console.log(solc.compile(source,1));
//console.log(solc.compile(source,1).contracts[':Lottery']);
module.exports = solc.compile(source,1).contracts[':Lottery'];
