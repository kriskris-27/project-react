import { useState } from 'react';
import './App.css'
import { Firstcomponent } from './components/Firstcomponent';

function App() {

    const [x,setx] =useState(0)
    const btnClick=()=>{
        console.log("btn clicked");
        setx(x+1)
        console.log(x);
    }
  return (
    <>
    {x}
    <button onClick={()=>{btnClick()}}>Click ME</button>
    <Firstcomponent/>
    </>
  )
}

export default App
