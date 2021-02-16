import React from 'react';

const Alert = () => {

    // Dismiss alert on button click
    function dismissAlert(e) {
        const alertBox = e.target.parentElement.parentElement;
        alertBox.classList.add('alert-dismiss');
    }

    return (
        <div className="mb-10">
            <h4 className="mb-5">Basic Alert</h4>

            <div className="alert alert-primary">
                A simple primary alert—check it out!

                {/* x button to dismiss alert */}
                <button className="alert-close" onClick={dismissAlert}>
                    <span>&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Alert
