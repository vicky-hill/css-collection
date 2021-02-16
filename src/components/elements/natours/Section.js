import React from 'react';

const Section = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10 mx-4">Feature Section</h4>
            <section className="section-gradient_natours">
                <div className="row width-90 gutter-30">
                <div className="card_natours col">
                    <i className="fas fa-globe card-icon_natours"></i>
                    <h3 className="card-title_natours">Explore the world</h3>
                    <p className="card-text_natours">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                <div className="card_natours col">
                    <i className="fas fa-mountain card-icon_natours"></i>
                    <h3 className="card-title_natours">See More</h3>
                    <p className="card-text_natours">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                <div className="card_natours col">
                    <i className="fas fa-map-signs card-icon_natours"></i>
                    <h3 className="card-title_natours">Go places</h3>
                    <p className="card-text_natours">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                <div className="card_natours col">
                    <i className="fas fa-heart card-icon_natours"></i>
                    <h3 className="card-title_natours">Do what you love</h3>
                    <p className="card-text_natours">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit.</p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Section;