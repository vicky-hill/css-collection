import React from 'react';
import nat8 from '../../../img/natours/nat-8.jpg';

const Testimonial = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10">Testimonial Card</h4>
            <div className="card-testimonial_natours">
                 <figure className="card-testimonial-shape_natours">
                    <img className="card-testimonial-img_natours" src={nat8} alt=""/>
                    <figcaption className="card-testimonial-caption_natours">
                        Mary Smith 
                    </figcaption>
                 </figure>
                 <div className="card-testimonial-text_natours">
                     <h3 className="card-testimonial-heading_natours">Best Week of my Life</h3>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae architecto tempore aut reprehenderit deleniti facere cupiditate excepturi nobis porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae architecto tempore aut reprehenderit deleniti facere cupiditate excepturi nobis porro.</p>
                 </div>
            </div>
        </div>
    )
}

export default Testimonial;