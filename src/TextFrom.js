import React, { useState } from 'react'
export default function TextFrom(props) {
    const [text, setText] = useState("");
    const upercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.ShowAlert('Words On UpperCase','Succeed')
    }
    const lowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.ShowAlert('Words On LowerCase','Succeed')
    }

    const handleonChange = (event) => {
        setText(event.target.value)
       
    }
    const clear = (event) => {
        setText('');
        props.ShowAlert('Words Now Clear','Succeed')
    }
    // text = "yo yo";//  Wrong way to change the value
    // setText('i love you'); // Right way to change the value
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white':'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" onChange={handleonChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? 'white':'white' }} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={upercase} >Change to Upercase</button>
                <button className='btn btn-primary mx-2' onClick={lowercase} >Change to lowercase</button>

                <button className='btn btn-primary' onClick={clear} >Clear</button>


            </div>
            <div className="contanier my-5" style={{ color: props.mode === 'dark' ? 'white':'black' }}>
                <h1>Your text summery</h1>
                <p>{text.split(" ").length} words and {text.length} charater</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h1>preview</h1>
                <p>{text.length>0?text:"write somting about your self"}</p>
            </div>
        </>
    )
}
