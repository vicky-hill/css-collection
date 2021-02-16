import React from 'react';

const Form = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10">Form Inputs</h4>
            <div className="row">
                <div className="col-6">
                    <div className="form_natours">
                        <div className="form-group_natours">
                            <input autocomplete="off" type="text" placeholder="Name" id="name" className="input_natours"/>
                            <label htmlFor="name" className="label_natours">Name</label>
                        </div>
                        <div className="form-group_natours">
                            <input autocomplete="off" type="text" placeholder="Email" id="email" className="input_natours"/>
                            <label htmlFor="email" className="label_natours">Email</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form