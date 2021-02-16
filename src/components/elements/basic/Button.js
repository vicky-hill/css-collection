import React from 'react';

const Button = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-5">Basic Buttons</h4>

            <button className="btn mr-3">Basic Button</button>
            <button disabled className="btn mr-3">Disabled Basic Button</button>
            <button className="btn btn-shade mr-3">Secondary Button</button>
            <button className="btn btn-outline-shade mr-3">Outline Button</button>
            <button className="btn btn-round">Rounded Button</button>
        </div>
    )
}

export default Button;
