import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "Success:")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "Success:")
    }
    const handleOnChange =(event)=>{
        console.log("Text Changed");
        setText(event.target.value);
    }
    const handleClearClick = () => {
        console.log("Text Cleared");
        setText('');
        props.showAlert("Text cleared", "Success:")
    }
    const handleCopy=()=>{
        console.log("copied");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "Success:")

    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces deleted", "Success:")

    }
    
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#212529':'white' ,
                    color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove ExtraSpace</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Type for Preview"}</p>
        </div>
        </>
    )
}
