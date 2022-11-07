import React, { useState } from "react";
export const TextUtils = (props) => {
    const upclick=()=>{
        let newtxt=text.toUpperCase();
        setText(newtxt);
        props.showalert("Succes!","your text coverted in upper case")
    }
    const loclick=()=>{
        let newtxt=text.toLowerCase();
        setText(newtxt)
        props.showalert("Succes!","your text coverted in lower case")
    }
    const clclick=()=>{
        let newtxt='';
        setText(newtxt)
        props.showalert("Succes!","your text has been cleared")
    }
    const chnge=(event)=>{
        console.log('bqwfb')
        setText(event.target.value);
    }
    const cpclick=()=>{
        
        navigator.clipboard.writeText(text)
        props.showalert("Succes!","your text has been copied")
    }
    const rmclick=()=>{
      let newtxt=text.split(/[ ]+/)
      setText(newtxt.join(' '))
      props.showalert("Succes!","your text has been removed")
    }
    const [text, setText]=useState('')
    return (
        <>
        <div className='container'>
        <h1>{props.head}</h1>
  <textarea className="form-control" id="myid"  value={text} rows="10" onChange={chnge}></textarea>
  <button disabled={text.length===0} className='btn btn-danger  my-3' onClick={upclick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className='btn btn-danger  my-3 mx-3' onClick={loclick}>Convert to Lower case</button>
  <button disabled={text.length===0} className='btn btn-danger  my-3 ' onClick={clclick}>Clear Text</button>
  <button disabled={text.length===0} className='btn btn-danger  my-3 mx-3' onClick={cpclick}>Copy Text</button>
  <button disabled={text.length===0} className='btn btn-danger  my-3 ' onClick={rmclick}>Remove space</button>
    </div>
    <div className='container'>
        <h1>Preview</h1>
        <p>{text}</p>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minute for read</p>
        <button type="submit" onClick={()=>{alert('your text has been submitted')}} className='btn btn-danger btn-lg my-3'>submit</button>
        </div>
    </>
  )
}

