import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className="container">
        <div className="display">
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button onClick={() => setCount(count +1)}>+</button>
          <button onClick={() => setCount(count -1)}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
