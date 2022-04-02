# Getting Started

This npm includes: codemirror and diff-match-patch(no need to install)

本依赖作为二次封装，包含以下两个依赖 codemirror 和 diff-match-patch(无需安装)

# 直接安装
### `npm i codeshow-codemirror-react`

https://www.npmjs.com/package/codeshow-codemirror-react

# Example
```
import Clcm from 'codeshow-codemirror-react';
import 'codeshow-codemirror-react/dist/clcm.css';

function App() {
  return (
    <div>
      <Clcm code='你好'/> //code必填, string
    </div>
  );
}

export default App;
```

# 说明

### 利用rollup打包结果在 ./rollup
### 利用webpack打包结果在 ./webpack 

# UI
<img width="378" alt="截屏2022-04-02 下午4 29 57" src="https://user-images.githubusercontent.com/49264532/161374645-f7f123fb-2d4c-46ef-8e1d-5b6ad51e12ab.png">


