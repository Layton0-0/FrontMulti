import { useState } from 'react'

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import A01Props from './components/A01Props';
import A02State from './components/A02State';
import A04CreateDOM from './components/A04CreateDOM';
import A05Hook from './components/A05Hook';
import A06Currency from './components/A06Currency';

function App() {
  // 이 변수는 변경돼도 화면에 반영되지 않는 일반 변수
  // useState로 정의된 변수는 값이 변경되면 변경된 값으로 화면 갱신을 한다
  const [name, setName] = useState('NolBu');
  let age = 20;
  const arr = [10, 11, 12];
  const obj = {
    name: 'kim',
    age: 19
  }
  const onAdd = (x, y) => {
    return `${x} + ${y} = ${x + y}`
  }
  const changeAge = () => {
    age = 100;
    console.log('Age => ', age);        // 내부적으로는 변경된다.
  }
  const changeName = (n) => setName('놀부');
  return (
    <div className='container'>
      <div className='col-12'>
        <h1>Component</h1>
      </div>

      <div className='con-12'>
        <A06Currency />
      </div>

      <div className='con-12'>
        <A05Hook />
      </div>

      <div className='col-12'>

        {/* 전달 값은 속성 형식으로 전달한다. {O}, "X" */}
        <A01Props comp="A01 Props"
          name={name} age={age} ary={arr} obj={obj} onAdd={onAdd} changeName={changeName}></A01Props>

      </div>

      <div className='con-12'>
        <A02State comp="A02 State" name={name} age={age}></A02State>
      </div>

      <div className='con-12'>
        <A04CreateDOM></A04CreateDOM>
      </div>

    </div>
  );
}

export default App;

A01Props.defaultProps = {
  num: 1000,

}