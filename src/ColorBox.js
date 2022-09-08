import React, {useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const ColorBox = (props) => {
    const {name,background} = props;
    const [ copied,copiedState ] = useState(false);

    const changeCopyState  = () =>{
        copiedState(true);
        setTimeout(() => copiedState(false),1500);
    }

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{background}} className="color-box"  >
                <div style={{background}} className={`copy-overlay  ${copied && "show"}` }/>
                <div style={{background}} className={`copy-msg  ${copied && "show"}` }>
                    <h1>copied!</h1> <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content"> <span> {name} </span> </div>
                    <button className="copy-button"> Copy </button>
                </div>
                <span className="see-more"> More </span>
            </div>
        </CopyToClipboard>

    );
};

export default ColorBox;