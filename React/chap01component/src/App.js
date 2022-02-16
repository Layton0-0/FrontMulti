import './../node_modules/bootstrap/dist/css/bootstrap.css';
import A01Props from './components/A01Props';

function App() {
  // 이 변수는 변경돼도 화면에 반영되지 않는 일반 변수
  const name = 'Yoon';
  const age = 20;
  const arr = [10, 11, 12];
  const obj = {
    name: 'kim',
    age: 19
  }
  const onAdd = (x, y) => {
    return `${x} + ${y} = ${x + y}`
  }
  const changeName = (n) => name = n;
  return (
    <div className='container'>
      <div className='col-12'>
        <h1>Component</h1>
      </div>

      <div className='col-12'>

        {/* 전달 값은 속성 형식으로 전달한다. {O}, "X" */}
        <A01Props comp="A01 Props"
          name={name} age={age} ary={arr} obj={obj} onAdd={onAdd} changeName={changeName}></A01Props>
      </div>

    </div>
  );
}

export default App;

A01Props.defaultProps = {
  num: 1000,

}