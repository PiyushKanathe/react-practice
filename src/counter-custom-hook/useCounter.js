import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  return {
    increment: () => {
      setCount((pre) => pre + 1);
    },
    decrement: () => {
      setCount((pre) => pre - 1);
    },
    count,
  };
};

export default useCounter;
