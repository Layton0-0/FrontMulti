// A01ClassComp.js
import React from 'react';

class A01ClassComp extends React.Component {

  // const x = 10; => error
  // 클래스에서 변수 명명은 반드시 constructor 안에 해야함.
  constructor() {
    super();
    this.name = 'Yoon';
    this.age = 20;
  }

  // event Method
  btnEvent = (evt) => alert('Hello World')
  // view를 구성하는 함수
  render() {
    return (
      <div>
        <h3>Class Component</h3>

        <div>
          Name: {this.name}<br />
          Age: {this.age}<br />
          {/* 
            자바스크립트 이벤트와 이름은 동일하나 on 다음을 대문자로 변경 
            이벤트 함수는 보간법 {}을 이용해 호출. ()는 필요에 따라 기술 -> addEventListener('click', 함수이름)
            매개변수가 없으면 ()없이 기술
          */}
          <button onClick={this.btnEvent}>CLICK</button>
        </div>
      </div>
    )
  }
}
export default A01ClassComp;