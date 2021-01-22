import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import { Rerousel } from "rerousel";


function App() {
  const ref = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Rerousel itemRef={ref}>
          <div ref={ref} style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test1</div>
          <div style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test2</div>
          <div style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test3</div>
          <div style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test4</div>
          <div style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test5</div>
          <div style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test6</div>
          <div style={{width: '50%', testAlign:'center', backgroundColor: 'red'}}>test7</div>
        </Rerousel>
        
      </header>
    </div>
  );
}

export default App;
