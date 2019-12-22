/*
 * @Author: xiaolong.qiu
 * @Date: 2019-12-19 11:15:16
 * @LastEditTime : 2019-12-22 15:38:12
 */



 const fs = require("fs")
 exports.px2rem = (path, ratio) => {
    //  if(!fs.existsSync(path)){
    //     console.error(`cannot find ${path}`)
    //     return
    //  }

    // 判断后缀是不是css  scss  less include("css")
    
    const r = fs.readFileSync(path)
    const re = r.toString().replace(/([\d]+)px/ig, i => parseFloat(i) / ratio + "rem"); // 不能局限于 $1 $2 等正则变量
    fs.writeFileSync(path, re) // 默认值utf8
    console.log(`${path}文件替换完成`);
 }

