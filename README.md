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
![clcm](https://user-images.githubusercontent.com/49264532/161381492-f2c81bfc-0115-4c00-8379-00514c3a5e84.gif)



