import { useState } from "react"

function Count() {
const [count, setCount] = useState(0)
    function increment() {
        setCount(count +1)
        console.log("click auf Increment")
    }
    function reset() {
        setCount(0)
        console.log("klick auf reset")
    }
  return (
    <div>
      <p>Zählerwert: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Count