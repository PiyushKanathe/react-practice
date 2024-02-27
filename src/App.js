import './App.css';
import DisplayComp from './DisplayListByAxios';
import TabsComponent from './TabsComponent/TabsComponent';
import InputComponent from './input-custom-hook/InputComponenet';
import Counter from './counter-custom-hook/CounterComponant';
import FileStructure from './PrettyPrintJson/FileStructure';

function App() {
  let data = {
    "root": {
      "folder1": {
        "file1.txt": "Content of file1",
        "file2.txt": "Content of file2"
      },
      "folder2": {
        "subfolder1": {
          "file3.txt": "Content of file3"
        }
      },
      "file4.txt": "Content of file4"
    }
  }
  return (
    <div className="App">
      <div>
        {/* <DisplayComp></DisplayComp> */}
        {/* <TabsComponent /> */}
        {/* <InputComponent /> */}
        {/* <Counter />  */}
        <FileStructure data={data} />
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
