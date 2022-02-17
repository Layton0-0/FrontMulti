// A02State.js
import React, { useState } from 'react'

function A02State(props) {
  // props는 읽기 전용 변수이다. 여기서 변경할 수 없다.
  const { name, age } = props;

  // 이 state에서만 사용할 내부 변수(변경돼도 화면 갱신은 이루어지지 않음.)
  const nick = '흥부';

  // 이 state에서만 사용할 내부 변수(변경돼도 화면 갱신이 이루어짐)
  // import React, {useState} from 'react'와 같이 import가 된다.
  // const [변수명, 변수를 변경할 함수명] = useStage(초기화값)

  // 변수명으로는 값을 수정할 수 없다. 수정은 항상 같이 기술한 함수로 변경.
  const [user, setUser] = useState('방자');
  const [num, setNum] = useState(18);
  const [check, setCheck] = useState(true);
  const [arr, setArr] = useState([10, 11, 100]);
  const [obj, setObj] = useState({
    name: 'HangDan',
    age: 20
  });


  // 함수
  // 값 조작(기본형)
  const changeUser = (evt) => setUser('Han');
  const changeNum = (n) => setNum(n);
  const changeCheck = () => setCheck(!check);

  // 배열 조작(레퍼런스 형)
  const addArray = () => {
    const num = Math.ceil(Math.random() * 100);
    // setArr(num); -> 아예 배열이 아니라 값 초기화.
    setArr(arr.concat(num)); // 값을 뒤에 추가. push 안됨.
  };

  const updateArray = (index, value) => {
    const data = arr.map((item, i) => index === i ? value : item)

    setArr(data);
  }

  const deleteArray = (index) => {
    const data = arr.filter((item, i) => index !== i ? true : false);
    setArr(data);
  }

  // 객체
  const addObject = (key, value) => {
    // obj[key] = value;
    // 자바스크립트 복사 방법{...대상, 키 자리에 밸류를 먹여라. }
    // 문자열로 넘어오면 항상 괄호를 먹여라. 아니면 변수로 인식된다. 
    const data = { ...obj, [key]: value };
    setObj(data);
  }


  const updateObject = (key, value) => {
    // obj[key] = value;
    // 자바스크립트 복사 방법{...대상, 키 자리에 밸류를 먹여라. }
    // 문자열로 넘어오면 항상 괄호를 먹여라. 아니면 변수로 인식된다. 
    const data = { ...obj, [key]: value };
    setObj(data);
  }


  const deleteObject = (key) => {
    delete obj[key];
    // 항상 새롭게 만들어줘야 함.
    const data = { ...obj };
    setObj(data);
  }



  return (
    <div>
      <h3>A02 State</h3>

      <div>
        Props: {name} / {age} <br />
        Normal Var: {nick} <br />
      </div>
      <br />

      <div>
        User: {user}<br />
        Num: {num}<br />
        {/* true, false 값은 화면에 표시되지 않는다 */}
        Check: {check ? '동의' : '동의 안함'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[5]}<br />
        Object: {obj.name} / {obj.age} / {obj.address}<br />


      </div>

      <div>
        {arr.map((item, index) => <span key={index}>{item} </span>)}
      </div>
      <div>
        <button onClick={changeUser}>User</button>
        <button onClick={() => changeNum(20)}>Num</button>
        <button onClick={changeCheck}>Check</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(1, 200)}>Update Array</button>
        <button onClick={() => deleteArray(0)}>Delete Array</button>

        <button onClick={() => addObject('address', 'seoul')}>Add Object</button>
        <button onClick={() => updateObject('address', 'yongin')}>Update Object</button>
        <button onClick={() => deleteObject('name')}>Delete Object</button>
      </div>

    </div>
  )


}

export default A02State;