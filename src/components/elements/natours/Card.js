import React from 'react';

const Card = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10">Feature Card</h4>

            <div className="row">
                <div className="col-3">
                    <div className="card_natours">
                        <i className="fas fa-globe card-icon_natours"></i>
                        <h3 className="card-title_natours">Explore the world</h3>
                        <p className="card-text_natours">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;