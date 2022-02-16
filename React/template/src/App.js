function App() {
  return <h1>Hello World</h1>
}
const x = 10;
// 외부 javascript 파일에서 사용할 수 있도록 출력
export { App, x };

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          naver
        </a>
      </header>
    </div>
  );
}

export default App;
*/