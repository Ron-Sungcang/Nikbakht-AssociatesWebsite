import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <div className="top-Icon">
        <img src={logo} className="App-logo" alt="logo" />        </div>
        
        <div className="top-buttons">
        <button>Book</button>
        <button>Consult</button>
        <button>Contact</button>
        </div>
        </div>
        </header>
    </div>
  );
}

export default App;
