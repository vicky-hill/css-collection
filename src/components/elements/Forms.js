import React from 'react';
import FormBasic from './basic/Form';
import FormAwesome from './awesome/Form';

const Forms = () => {
    return (
        <div className="container">
            <h1>Forms</h1>

            <FormBasic />
            <FormAwesome />
        </div>
    )
}

export default Forms;