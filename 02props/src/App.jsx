import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hi! i am yuvraj</h1>
      <div className="flex" >
        <span className="basis-1/2">
          <Card name="yuvraj pal"/>
        </span>
        <span className="basis-1/2">
          <Card />
        </span>
      </div>
    </>
  )
}

export default App
