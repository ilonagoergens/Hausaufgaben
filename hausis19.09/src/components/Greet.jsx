import React, {useState} from "react";


function Greet() {
    const[inputValue, setInputValue] = useState("")

    const handleInput = (event) => {
         setInputValue(event.target.value)
    }

    return (
    <div>
        <h1>Wilkommen {inputValue}</h1>
        <input
          onChange={handleInput}
          type="text"
          placeholder="Gebe deinen Namen ein"
          value={inputValue}/>
    </div>
    )
}

export default Greet