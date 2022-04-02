# Getting Started

This npm includes: codemirror and diff-match-patch(no need to install)
本依赖作为二次封装，包含以下两个依赖 codemirror and diff-match-patch(无需安装)


### `npm i codeshow-codemirror-react`

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
