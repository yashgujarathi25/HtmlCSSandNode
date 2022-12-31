import logo from './logo.svg';
import './App.css';
import First from './component/First';
import Second from './component/Second';
function App() {
  return (
      <div>
          <h1>Hello World !!!!</h1>
          <First></First>
          <Second></Second>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
