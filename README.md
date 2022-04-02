# Getting Started

Before start, you must install codemirror and diff-match-patch

必须安装以下两个依赖，本依赖作为二次封装

`npm i codemirror@^5.65.2`

`npm i diff-match-patch@^1.0.5`

### `npm i codeshow-codemirror-react`

# Example
```
import Clcm from 'codeshow-codemirror-react';

const App = () => {
  return (
    <div>
      <Clcm code='你好'/> //code必填, string
    </div>
  )
}
```

#目录结构
├── scripts                    //webpack打包脚本  
├── es                      
├── lib                        //npm包内容
├── example                  
    ├──index.js                                     
├── src                         
│   ├── index.css          
│   └── index.js                                
├── README.md                   // 开发文档
├── package.json                // 模块描述文件
