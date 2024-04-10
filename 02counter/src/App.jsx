import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  const addValue = () => {
    if(counter == 20){
      setCounter(counter);
    }else{
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }
  }

  const removeValue = () => {
    if(counter == 0) {
      setCounter(counter);
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App
