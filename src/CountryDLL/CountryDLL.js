import { useEffect, useState } from "react";


function CountryDLL() {
  const [countryDLL, setCountryDLL] = useState([])
  const [stateDDL, setStateDDL] = useState([])
  const info = [
    {state: 'MP', coun : 'India'},
    {state: 'MH', coun: 'India'},
    {state: 'State1', coun: 'Coun1'},
    {state: 'State2', coun: 'Coun1'}
  ]
  // useEffect(() => {
  //   let temp = [...]
  // }, [])

  const selectAction = (event) => {
    console.log(event.target.value)
    let temp = info.filter((val) => {
      if(event.target.value === val.coun){
        return val
      }
    })
    setStateDDL(temp)
    console.log(temp)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
      <div>
        <select name="c" onChange={(e) => selectAction(e)}>
          <option>Select</option>
          <option value="India">India</option>
          <option value="Coun1">Coun1</option>
        </select>
      </div>
      <div>
      <select name="s">
        {stateDDL && stateDDL.map((val) => {
          return <option key={val.state} value={val.state}>{val.state}</option>
        })}
      </select>
      </div>
      </header>
    </div>
  );
}

export default CountryDLL;
