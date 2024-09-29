import { useState } from "react";

function ChangeButton() {
    const [On, setzeOn] = useState(false)
    const [buttonText, setzeButtonText] = useState("Hier Klicken")

    function changeText() {
        if (!On) {
            setzeButtonText("On")
        }else {
            setzeButtonText("Off")
        }
        setzeOn(!On)
    }

    return (
        <div>
            <button onClick={changeText}>{buttonText}</button>
        </div>
    )
}

export default ChangeButton 