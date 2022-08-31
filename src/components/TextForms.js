import React,{useState} from 'react';


export default function TextForms(props) {

  const handleOnChange=(event)=>{ 
    setText(event.target.value)
  }
  const[text,setText]= useState('');

// this funcxrtion change The Text
const handleUpClick=()=>{
  console.log("You Clicked "+text)
  let result = text.toUpperCase();
 setText(result);
props.showAlert("Converted to uppercase","success")
}

//Change To Lower Case
const handleLoClick=()=>{
  
  let resultLowerCase = text.toLowerCase();
 setText(resultLowerCase);
 props.showAlert("Converted to lowercase","success")
}
//Clear text
const handleClClick=()=>{
  setText("");
  props.showAlert("The Text is Cleared","success")
}
//Copy text
const handleCopyClick=()=>{
navigator.clipboard.writeText(text);

}

//Remove Extra Spaces
const handleExtraClick=()=>{
  let newText =  text.split(/[ ]+/);
  setText(newText.join(" "));
}  

 

  return (
    <>
<div className='container'  style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1>{props.titleHeading}</h1>
  <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} value ={text} onChange={handleOnChange} rows="8" ></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraClick}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your Text Summary Here</h2>
  <p>{text.split(" ").length} words,{text.length}characters</p>
  <p>{0.008*text.split(" ").length} minutes</p>
  <h3>preview</h3>
  <p>{text.length > 0?text :"Enter Some Text to Preview it"}</p>

</div>
</>
  //  <div>TextForms</div>
  )
}
