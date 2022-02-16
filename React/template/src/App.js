// function App() {
//   return <h1>Hello World</h1>
// }
// const x = 10;

// 1가지 요소만 담을 수 있음. 묶어줘야함.
// const elem = <div>
//   <h1>Hello World</h1>
//   <div>안녕하세요</div>
// </div>

// function App() {
//   const name = '윤정'
//   const age = 20;
//   const qty = 3;
//   const cost = 10;
//   const arr = [10, 11, 12];
//   const obj = {
//     name: '윤정',
//     age: 20,
//     tel: '010-5555-6666'
//   }
//   const onAdd = (x, y) => { return `${x} + ${y} = ${x + y}` }
//   // return 값은 하나로 묶을 때 ()를 사용.
//   return (
//     <div>
//       <h1>처음 만들어보는 React</h1>
//       <div>
//         {/* 보간법 {변수, 함수, 연산자} */}
//         Name: {name}<br></br>
//         Age: {age}<br />
//         Total: {qty + cost} <br />
//         Array: {arr[0]} / {arr[1]} / {arr[2]} <br />
//         Object: {obj.tel} <br />
//         onAdd: {onAdd(10, 20)}
//       </div>
//     </div>
//   )
// }

// 외부 javascript 파일에서 사용할 수 있도록 출력
// export default App;


import logo from './logo.svg';
import './App.css';
import A01Comp from './components/A01ClassComp'

function App() {
  return (
    <div className="App">
      <h1>JSX</h1>

      <div>안녕하세요. 리액트입니다.</div>

      <A01Comp></A01Comp>
      <div></div>
    </div>
  );
}

export default App;
