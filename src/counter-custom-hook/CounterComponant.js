import useCounter from "./useCounter";
const Counter = () => {
    const { count, increment, decrement } = useCounter(0)
    return (
        <div>
            <div>Count: {count}</div>
            <div>
                <button onClick={increment} >Increment</button>
                <button onClick={decrement} >Decrement</button>
            </div>
        </div>
    )
}

export default Counter;