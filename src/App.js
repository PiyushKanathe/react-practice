import './App.css';
import RenderCountComp from './RenderCountComp';
import TableDisply from './TableDisplay';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <TableDisply></TableDisply>
      </div>
    </div>
  );
}

export default App;
