import qr from './CC-QR.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={qr} className="qr" alt="qr-code" />
        <h2>
          Clare Cerullo
        </h2>
        <h3>Software Engineer</h3>
        <p>
          Scan the QR code to visit clarecerullo.com, connect with me, and check out my projects
        </p>
      </header>
    </div>
  );
}

export default App;
