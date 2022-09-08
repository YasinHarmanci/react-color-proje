import React, {useState} from 'react';
import ColorBox from "./ColorBox";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Palette = (props) => {

    const [setColor, setColorState] = useState( 100)

    const colorBoxes = props.palette.colors[setColor].map(c => (
        <ColorBox  background={c.hex} name={c.name}/>
    ))

    const changeLevel = (newLevel) => {
    setColorState(newLevel);
    }

    return (
        <div className="palette">
            <Slider style={{margin:"20px"}}
                defaultValue={setColor}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
            />
            <div className="palette-colors"> {colorBoxes} </div>
        </div>
    );
};


export default Palette;    