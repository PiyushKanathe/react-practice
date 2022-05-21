import { useState, useEffect } from "react";

const RenderCountComp = () => {
  const [count, setCount] = useState(0);
  const clickCounter = () => {
    setCount(0)
  }
  useEffect(()=>{
      console.log('rendered')
  }, [count])

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={clickCounter}>Click me</button>
    </div>
  );
};

export default RenderCountComp;
