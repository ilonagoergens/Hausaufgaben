import React, { useState } from "react"

function Counter({ startValue }) {
    const [count, setCount] = useState(startValue)

    return (
        <div>
            <p>Zählerstand: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

function MultiCounter() {
    return (
        <div>
            <Counter startValue={5} />
            <Counter startValue={20} />
            <Counter startValue={30} />
        </div>
    )
}

export default MultiCounter
