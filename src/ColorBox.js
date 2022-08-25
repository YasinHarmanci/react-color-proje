import React from 'react';

const ColorBox = () => {

    return (
        <div style={{background:this.props.background}}>
            <span>{this.props.name}</span>
            <span>more</span>
        </div>
    );
};

export default ColorBox;