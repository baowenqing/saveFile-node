'use strict';

let fs=require('fs');



/**
 * 保存文件【MP3 json txt 之类的】
 *
 * @param filePath 全路径 例如：  "./danke/1.txt"
 * @param data 需要保存的数据
 * @param isTextType 是否是文本格式
 */
let saveFile = (filePath, data,isTextType=true) => {
    if (!filePath.includes("/")) {
        filePath="./"+filePath
    }

    let lastIndex=filePath.lastIndexOf("/")
    let parentPath =  filePath.substring(0,lastIndex);

    if (!fs.existsSync(parentPath)) {
        fs.mkdirSync(parentPath, {recursive: true});
    }
    if (isTextType) {
        fs.writeFileSync(filePath, JSON.stringify(data), 'utf-8');
    }else{
        fs.writeFileSync(filePath,  (data), 'utf-8');
    }
}

module.exports = saveFile;
