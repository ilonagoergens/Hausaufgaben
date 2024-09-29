import { useState, useEffect} from 'react'
import ShowCars from './components/ShowCars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{margin: "0 auto", width:"300px"}}>
    <h1>Car-List</h1>
    <ShowCars/>
    </div>
  )
}

export default App
