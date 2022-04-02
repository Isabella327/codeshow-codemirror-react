import React from 'react';
import ReactDOM from "react-dom/client";
import Clcm from 'codeshow-codemirror-react';

const App = () => {
  return (
    <div>
      <Clcm code='你好'/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

