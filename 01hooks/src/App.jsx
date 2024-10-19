import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  function add(){
    if(count<20){
      setCount(count+=1);
      setCount(count+=1)
      setCount(count+=1)
      setCount(count+=1)
    }
  }
 const minus = () => {
  if(count>0){
    setCount(count - 1);
  }
}
  return (
    <>
      <h1>Yuvraj Pal</h1>
      <h3>count={count}</h3>
      <button 
      onClick={add}> Add value</button>
      <br />
      <br />
      <button
      onClick={minus}> Remove value</button>
    </>
  )
}

export default App
