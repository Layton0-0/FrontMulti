import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 여러 개 줄때는 {} 안에 여러개 ,로 구분해서 넣음.
import App from './App';
// 닉네임은 커스터마이징 가능함. 보편적으로 같은 이름으로 적음. 하나만 쓸 때만 가능.
// {} 내부의 이름은 변수명과 동일해야함.
import { Abb, x as AbbX } from './Abb';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* 잘 안 건들고 app파일의 뷰 하나만 둠. */}
    {/* 
      1. 태그명으로 사용하는 경우 첫 글자는 반드시 대문자로 정의 
      2. 종료 태그가 반드시 존재해야 한다. 또는 <tabName />
    */}
    <App />
    <Abb />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
