import React, {useState} from "react";

function ChangeColor() {
    const colors = [ "brown", "darkgreen", "yellow", "orange"]

    const[color, setColor] =useState(0)

    const handleChangeColor = () => {
        if (color === colors.length - 1) {
            setColor(0)  
        } else {
            setColor(color + 1);  
        }
    }

    return (
        <div style={{ backgroundColor: colors[color], height: "200px", width: "250px" }}>
            <button onClick={handleChangeColor}>Farbe ändern</button>
        </div>
    )
}

export default ChangeColor
