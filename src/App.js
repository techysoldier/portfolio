import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Devin Johnson</code> 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/devinsymonejohnson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked In 
        </a>
      </header>
    </div>
  );
}

export default App;
