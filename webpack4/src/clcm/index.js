import React from 'react';
import './index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/merge/merge.js';
import 'codemirror/addon/merge/merge.css';
import 'codemirror/theme/material.css';
import CodeMirror from 'codemirror';
import DiffMatchPatch from 'diff-match-patch';
window.diff_match_patch = DiffMatchPatch;
window.DIFF_DELETE = -1;
window.DIFF_INSERT = 1;
window.DIFF_EQUAL = 0;

const Clcm = (props) => {
  let { code } = props;
  let msg = null;
  let result = '';
  const diffRef = React.createRef();
  const initUI = (code) => {
    diffRef.current.focus();
    const node = diffRef.current;
    node.innerHTML = "";
    const target = CodeMirror.MergeView(node, {
      extraKeys: { Ctrl: 'autocomplete' },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      lint: true,
      line: true,
      mode: 'application/json',
      left: 0,
      origLeft: null,
      value: code,
      orig: code,
      lineNumbers: true,
      styleActiveLine: true,
      highlightDifferences: true
    });
    msg = target;
  };

  const handleEdit = (code) => {
    const msg = code ? JSON.parse(JSON.stringify(code)) : '{}';
    initUI(msg);
  };

  const handleSave = () => {
    result = msg.editor().getValue();
    navigator.clipboard.writeText(result);
  }

  return (
    <div>
      <div className='button-container' onClick={() => handleEdit(code)}><span>展示</span></div>
      <div id="diff_view" ref={diffRef}></div>
      <div className='button-container' onClick={() => handleSave()}><span>复制</span></div>
    </div>
  )
};
export default Clcm;