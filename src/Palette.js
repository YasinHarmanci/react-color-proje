import React from 'react';
import ColorBox from "./ColorBox";

const Palette = () => {

    const colorBoxes = this.props.colors.map(c => (
        <ColorBox background={c.color} name={c.name}/>
    ))

    return (
        <div className="palette">
            <div className="palette-colors"> {colorBoxes} </div>
            <h1>palette</h1>
        </div>
    );
};


export default Palette;    