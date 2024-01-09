import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("Enter the text");
    const handleUpClick = () =>{
      if (text.length >0){
        let changeText= text.toUpperCase()
        settext(changeText)
      }
      else{
        alert("Please enter the test first")
      }
    }
    const handleOnChange = (event) => {
        console.log("handle ON Change")
        settext(event.target.value)
    }
    const handleLoClick=()=>{
      if (text.length >0){
        let changeText= text.toLowerCase()
        settext(changeText)
      }
      else{
        alert("Please enter the test first")
      }
    }
    const handleCaClick=()=>{
      if (text.length >0){
        let changeText=text[0].toUpperCase() + text.slice(1)
        settext(changeText)
      }
      else{
        alert("Please enter the test first")
      }
    }
    const clearText=()=>{
      settext("")
    }
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <h1>
            {props.heading}
        </h1>
        <div className="mb-3">
          <textarea className="form-control" rows="10" style={{backgroundColor:props.mode==='dark'?'#20254f':'white', color:props.mode==='light'?'black':'white'}} id="exampleInputEmail1" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Lower Case</button>
        <button className="btn btn-primary mx-3" onClick={handleCaClick}>Capitalize</button>
        <button className="btn btn-primary mx-3" onClick={clearText}>Clear</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h3>
        Your Text Summary
      </h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
