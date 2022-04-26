import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UPPERCASE has been done", "success");
        
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase has been done", "primary");

    }
    const handleClrClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("clear Text has been done", "warning");
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy Text has been done", "success");
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been removed", "danger");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white': 'grey'}}>
            <h1 className="mb-3">{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === 'dark' ? '#13466e': 'white', color: props.mode === 'dark' ? 'white': '#042743'}} rows="8" value={text}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary me-1 mx-1" onClick={handleUpClick} >Convert UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick} >Convert lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClrClick} >Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpace} >Remove Extra Space</button>
            
        </div>  
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white': '#042743'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charaters</p>
            <h2>Preview</h2>
            <p>{text==''?'Nothing to preview' : text}</p>
        </div>
        </>
  )
}
