import React from 'react';
import nat8 from '../../../img/natours/nat-8.jpg';
import nat9 from '../../../img/natours/nat-9.jpg';

function Modal() {
    return (
        <div className="mb-10">
            <h4 className="mb-5">Modal</h4>

            <div className="modal_natours" id="modal_natours">
                <div className="modal-content_natours">
                    <div className="modal-left_natours">
                        <img src={nat8} alt="" className="modal-img_natours"/>
                        <img src={nat9} alt=""  className="modal-img_natours"/>
                    </div>
                    <div className="modal-right_natours">
                        <a href="" className="modal-close_natours">&times;</a>
                        <h2 className="modal-title_natours heading-gradient_natours">Start booking now</h2>
                        <h3 className="modal-subtitle_natours">Import &ndash; Check before booking</h3>
                        <p className="modal-text_natours">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa laboriosam, perspiciatis ipsum aliquid delectus voluptas hic veritatis. Quod optio voluptates dolores consectetur perferendis! Quia eum laboriosam aperiam nulla assumenda!</p>
                    
                        <a href="" className="btn_natours btn-purple_natours">Book now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
