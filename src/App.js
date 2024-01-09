import './App.css';
// import About from './component/About';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import React, {useState} from 'react'


function App() {
  const [mode,setMode]= useState('light')
  const [toggle,setToggle]=useState('Enable Dark Mode')

  const toggleHandle=()=>{
    if(mode==='light'){
      setMode('dark')
      setToggle('Enable Light Mode');
      document.body.style.backgroundColor='#02051c';
    }
    else{
      setMode('light')
      setToggle('Enable Dark Mode')
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
      <NavBar tittle='Convert' mode={mode} toggleHandle={toggleHandle} toggle={toggle}/>
      <div className="container my-3">
      <TextForm heading='Please enter your text below' mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
