import React, { useState, useRef } from 'react';
import { API, ToastComponent } from '@src/utility/api';
import Breadcrumbs from '../../../@core/components/breadcrumbs';
import { ToastContainer, toast } from 'react-toastify';
import { MinusCircle, Check } from 'react-feather';
import {
  Row, Col, Card, CardBody, Modal, ModalBody, ModalFooter,
  ModalHeader, Label, Button, Table
} from 'reactstrap';

// ** Styles
import 'react-block-ui/style.css';
import './index.scss';
import '@styles/base/plugins/forms/form-quill-editor.scss';
import '@styles/react/libs/react-select/_react-select.scss';
import '@styles/base/pages/page-blog.scss';

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

const AddForm = (props) => {
  const { EnvID, forms, setForms, } = props;
  const [confModal, setConfModal] = useState(false);
  const confRef = useRef(null);
  const [server, setServer] = useState('');
  const [indexForm, setIndexForm] = useState('');
  const [confName, setConfName] = useState('ftframe.cfg');
  const [confList, setConfList] = useState(['']);
  const [saveConfBut, setSaveConfBut] = useState(true);

  const removeFormConfFields = (index, i) => {
    const newForm = [...forms];
    newForm[index].confAddInfo.splice(i, 1);
    setForms(newForm);
    setConfSum(n => n - 1);
  };

  const [confTarget, setConfTarget] = useState(null);

  const initUI = (data, index, file) => {
    let confSpec = JSON.parse(JSON.stringify(data));
    const obj = forms[index].confContent;
    if (obj.length !== 0) {
      for (let i = 0; i < obj.length; i++) {
        if (file === obj[i]['fileName']) {
          confSpec = JSON.parse(JSON.stringify(obj[i]['confText']));
        };
      };
    };
    confRef.current.focus();
    const node = confRef.current;
    node.innerHTML = "";
    const target = CodeMirror.MergeView(node, {
      extraKeys: { Ctrl: 'autocomplete' },
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      lint: true,
      line: true,
      mode: 'application/json',
      left: 0,
      origLeft: null,
      value: confSpec,
      orig: data,
      lineNumbers: true,
      styleActiveLine: true,
      highlightDifferences: true
    });
    setConfTarget(target);
  };

  const handleEditConf = (EnvID, tag, file) => {
    setSaveConfBut(false);
    setConfName(file);
    API.get('xxx', { params: { service: server, EnvID, tag, file } }).then(res => {
      res.data.data.result ? initUI(res.data.data.result, indexForm, file) : initUI('{}', 0, '');
    });
  };

  const handleSaveConf = () => {
    const singleConf = confTarget.editor().getValue();
    const oobj = forms[indexForm].confContent;
    if (oobj.length === 0) {
      oobj.push({
        fileName: confName,
        confText: singleConf
      });
    } else {
      for (let i = 0; i < oobj.length; i++) {
        if (confName === oobj[i]['fileName']) {
          oobj[i]['confText'] = singleConf;
          break;
        } else if (i === (oobj.length - 1)) {
          oobj.push({
            fileName: confName,
            confText: singleConf
          });
        };
      };
    };
    const newForm = [...forms];
    newForm[indexForm]['confContent'] = oobj;
    setForms(newForm);
    toast.success(<ToastComponent title='🦄  保存成功，不要刷新页面哦' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: false,
      closeButton: true
    });
    setConfModal(!confModal);
  };

  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs
        breadCrumbTitle='创建任务'
        breadCrumbParent='任务'
        breadCrumbActive='编辑'
      />
      <Row>
        <Col sm='12'>
          <Card>
            <CardBody>
              <Col md='1'>
                <Button.Ripple className='btn-icon' outline color='primary' onClick={() => removeFormConfFields(index, indexIn)}>
                  <MinusCircle size={14} />
                </Button.Ripple>
              </Col>
              ))
              <Row>
                <Col className='mb-2' sm='6'>
                  <Label>已修改Conf列表</Label>
                  <div className='border rounded'>
                    <Modal isOpen={confModal} toggle={() => setConfModal(!confModal)} className='modal-dialog-centered'>
                      <ModalHeader toggle={() => setConfModal(!confModal)}>配置修改</ModalHeader>
                      <ModalBody >
                        {/* <Label>{confName}</Label> */}
                        <Row>
                          <Col md='3'>
                            <div className='border rounded'>
                              <Table borderless responsive className='table-hover-animation'>
                                <tbody>
                                  {
                                    confList.map((file, i) => (
                                      <tr key={i}>
                                        <td onClick={() => handleEditConf(EnvID, 'exp', file)}>{file}</td>
                                      </tr>
                                    ))}
                                </tbody>
                              </Table>
                            </div>
                          </Col>
                          <Col md='9'>
                            <Label>左侧为可修改区域</Label>
                            <div id="conf_view" ref={confRef}></div>
                          </Col>
                        </Row>
                        {/* Same as */}
                        <ToastContainer />
                      </ModalBody>
                      <ModalFooter>
                        <Button disabled={saveConfBut} color='primary' onClick={() => handleSaveConf()}>
                          保存改配置
                        </Button>
                        {' '}
                      </ModalFooter>
                    </Modal>
                  </div>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
              ))
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddForm;

