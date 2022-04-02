# Getting Started

Before start, you must install codemirror and diff-match-patch

必须安装以下两个依赖，本依赖作为二次封装

`npm i codemirror@5.65.2`

`npm i diff-match-patch@1.0.5`

### `npm i codeshow-codemirror-react`

https://www.npmjs.com/package/codeshow-codemirror-react

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
# 说明

### 利用rollup打包结果在 ./rollup
### 利用webpack打包结果在 ./webpack 

# UI
<img width="378" alt="截屏2022-04-02 下午4 29 57" src="https://user-images.githubusercontent.com/49264532/161374645-f7f123fb-2d4c-46ef-8e1d-5b6ad51e12ab.png">


