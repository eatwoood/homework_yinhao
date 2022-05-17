import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import api from "./services";
import Qcard from "./components/Q-Card";
import Loading from "./components/Loading";
import { debounce } from "lodash";

interface INFO {
  qq: any;
  avatar: any;
  name: any;
}

const QQ_NUMBER_REGEXP = new RegExp(/^[1-9]\d{4,11}$/);

function App() {
  const [info, setInfo] = useState<INFO | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [keyword, setKeyword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // 获取qq信息
  const getQQInfo = async (q: any) => {
    if (!keyword) return; // 防止初次渲染执行，复杂的情况，可以考虑加个ref判断是否初始化
    if (!QQ_NUMBER_REGEXP.test(q.trim())) {
      setErrorMsg('不正确的qq号码，请确认！');
      return};
    setShowLoading(true);
    const { qq, qlogo, name, msg } = await api.getQQInfo(q);
    setShowLoading(false);
    setErrorMsg(msg);
    setInfo({
      qq,
      avatar: qlogo,
      name,
    });
  };

  useEffect(() => {
    debouncedFn(() => getQQInfo(keyword));
  }, [keyword]);

  function onInputChange(event: any) {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  }
  // 后续可封装成debounce hooks
  const debouncedFn = useCallback(
    debounce((callback) => {
      callback();
    }, 500),
    []
  );

  return (
    <div className="App">
      <input type="text" value={keyword} onChange={onInputChange} />
      {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
      {info && <Qcard {...info} />}
      {showLoading && <Loading />}
    </div>
  );
}

export default App;
