import { useState } from "react";
import "./App.css";

function App() {
  const months = ['jan', 'feb', 'March', 'Apr', 'may', 'june' ]
  const [selectedMonth, seSelectedMont] = useState('')
  const [amt, setAmt] = useState(0)
  const [expArr, setExpArr] = useState([])
  const selectMonth = (value) => {
    console.log(value)
    seSelectedMont(value)
  }
  const storeExp = (amt) => {
    setAmt(amt)
  }
  const submitExp =() =>{
    setExpArr(...expArr, `${selectedMonth}: ${amt}`)
    console.log(expArr)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Expanse Trac ker
        </p>
        <div>
          <select name="Month" onClick={(e)=>selectMonth(e.target.value)}>
          {
            months.map((month) => {
              return <option value={month}>{month}</option>
            })
          }
          </select>
          <input type='number' onChange={(e)=>storeExp(e.target.value)}></input>
          <button onClick={submitExp}>Submit Exp</button>
        </div>
      </header>
    </div>
  );
}

export default App;
