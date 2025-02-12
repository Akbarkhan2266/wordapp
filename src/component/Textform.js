import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=() =>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase", "Success")
  }
  const handleLoClick=() =>{
  //  console.log("Lowercase was clicked" +text)
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleTrimClick=() =>{
    
      let newText=text.trimStart();
      setText(newText)
    }
    const handleReplaceClick=() =>{
    
      let newText=text.replace(text,setText);
      setText(newText)
    }
  const handleUpChange=(event) =>{
    console.log("onChange");
    setText(event.target.value);
  }
  const[text,setText] = useState("enter your text here");
  
  return (
    <>
    <div>
     <h1>{props.heading}</h1>
  <div class="mb-3">
    <label for="my box" class="form-label"></label>
    <textarea class="form-control" value={text} onChange={handleUpChange} rows="6"></textarea>
  </div>
  <button className='btn btn-primary mx-2 my2' onClick={handleUpClick}>Convert to uppercase </button>
  <button className='btn btn-primary mx-2 my2' onClick={handleLoClick}>Convert to lowercase </button>
  <button className='btn btn-primary mx-2 my2' onClick={handleTrimClick}>Remove white spaces on both sides </button>
  <button className='btn btn-primary mx-2 my2' onClick={handleReplaceClick}>Replace the words</button>
    </div>
    
    <div className="container">
      <h2>About your text</h2>
      <p>{text.length} characters</p>
      <p>{0.005*text.length} minutes to read it</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
