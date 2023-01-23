
import { useState } from 'react';
import './App.css';
// import Home from './component/Home'
// import Timer from './component/Timer'

import Navbar from './component/Navbar'
function App() {
  const [Mode,setMode]=useState('white');
  const toggle=()=>{
   
    if(Mode=='black'){

      setMode('white')
      document.body.style.backgroundColor="white"
      document.body.style.color='black';
    }

    else{
      setMode('black')
      document.body.style.backgroundColor='#2e2727';
      document.body.style.color='white';
    }

  }
  return (
    <>
    <Navbar Mode={Mode} toggle={toggle}/>
    {/* <Home/> */}
    {/* <Navbar/> */}
    {/* <Timer/> */}
    </>
  );
}

export default App;
