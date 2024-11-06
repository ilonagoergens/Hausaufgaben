import {render, screen} from "@testing-library/react"
import Greeting from "./Greeting"
import React from "react"

describle("Greeting Component Rendering", () => {
    test("renders the greeting with the name", () => {
        render(<Greeting name="Ilona" />)
        
        const greetingElement = screen.getByText(/Hello, Ilona!/i)

        expect(greetingElement).toBeInTheDocument()
    })
})