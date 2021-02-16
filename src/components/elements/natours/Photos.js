import React from 'react';
import beach1 from '../../../img/natours/beach-1.jpg';
import beach2 from '../../../img/natours/beach-2.jpg';
import beach3 from '../../../img/natours/beach-3.jpg';

const Photos = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10">Photo Composition</h4>
            <div className="row">
                <div className="col-6">
                <div className="composition_natours">
                <img src={beach1} alt="" className="composition-photo_natours photo-1_natours"/>
                <img src={beach2} alt="" className="composition-photo_natours photo-2_natours"/>
                <img src={beach3} alt="" className="composition-photo_natours photo-3_natours"/>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Photos