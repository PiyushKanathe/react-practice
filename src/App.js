import './App.css';
import DisplayComp from './DisplayListByAxios';

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
        <DisplayComp></DisplayComp>
      </div>
    </div>
  );
}

export default App;


// export default function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [status, setStatus] = useState(false);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setSeconds((seconds) => seconds + 1);
//     }, 1000);
//     if (!status) {
//       clearInterval(interval);    
//     }
//   }, [status]);

//   const start = () => {
//     setStatus(true);
//   };
//   const stop = () => {
//     setStatus(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {seconds} seconds have elapsed since mounting.
//       </header>
//       <div>
//         <button onClick={start}>Start</button>
//         <button onClick={stop}>Stop</button>
//       </div>
//     </div>
//   );
// }
