import React from 'react';
import ButtonBasic from './basic/Button';
import ButtonProshop from './proshop/Button';

const Buttons = () => {
    return (
        <div className="container">
            <h1 className="mb-7">Buttons</h1>
            <ButtonBasic />
            <ButtonProshop />
        </div>
    )
}

export default Buttons;
