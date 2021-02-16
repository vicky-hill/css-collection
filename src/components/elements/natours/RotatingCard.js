import React from 'react';

const RotatingCard = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-10">Rotating Card</h4>
            <div className="row width-90">

                {/* Card 1 */}
                <div className="col-auto">
                    <div className="card-rotating_natours">

                        {/* Card Front */}
                        <div className="card-rotating-side_natours side-front_natours">
                            <div className="card-rotating-image_natours image-1_natours"></div>
                            <h4 className="card-rotating-heading_natours">
                                <span className="card-rotating-heading-span_natours span-1_natours">The Sea Explorer</span>
                            </h4>
                            <div className="card-rotating-details_natours">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card back */}
                        <div className="card-rotating-side_natours side-back_natours back-1_natours">
                            <div className="card-rotating-cta_natours">
                                <div className="card-rotating-pricebox_natours">
                                    <p className="card-rotating-price-only_natours">Only</p>
                                    <p className="card-rotating-price-value_natours">$29</p>
                                </div>
                                <a href="#" className="btn_natours btn-white_natours">Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-auto">
                    <div className="card-rotating_natours">
                        {/* Card Front */}
                        <div className="card-rotating-side_natours side-front_natours">
                            <div className="card-rotating-image_natours image-2_natours"></div>
                            <h4 className="card-rotating-heading_natours">
                                <span className="card-rotating-heading-span_natours span-2_natours">The Forest Hiker</span>
                            </h4>
                            <div className="card-rotating-details_natours">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card back */}
                        <div className="card-rotating-side_natours side-back_natours back-2_natours">
                            <div className="card-rotating-cta_natours">
                                <div className="card-rotating-pricebox_natours">
                                    <p className="card-rotating-price-only_natours">Only</p>
                                    <p className="card-rotating-price-value_natours">$29</p>
                                </div>
                                <a href="#" className="btn_natours btn-white_natours">Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="col-auto">
                    <div className="card-rotating_natours">
                        {/* Card Front */}
                        <div className="card-rotating-side_natours side-front_natours">
                            <div className="card-rotating-image_natours image-3_natours"></div>
                            <h4 className="card-rotating-heading_natours">
                                <span className="card-rotating-heading-span_natours span-3_natours">The Snow Adventurer </span>
                            </h4>
                            <div className="card-rotating-details_natours">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card back */}
                        <div className="card-rotating-side_natours side-back_natours back-3_natours">
                            <div className="card-rotating-cta_natours">
                                <div className="card-rotating-pricebox_natours">
                                    <p className="card-rotating-price-only_natours">Only</p>
                                    <p className="card-rotating-price-value_natours">$29</p>
                                </div>
                                <a href="#" className="btn_natours btn-white_natours">Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RotatingCard;