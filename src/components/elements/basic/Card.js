import React from 'react';
import pink from '../../../img/basic/pink.png';
import book from '../../../img/basic/book.png';

const Card = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-5">Basic Cards</h4>

            {/* Card with Header */}
            <div className="card card-border-shade" style={{ width: '400px' }}>
                <div className="card-header">
                    Header
                </div>
                <div className="card-body">
                    <h4 className="card-title">Card Title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ad architecto impedit rem!</p>
                </div>
            </div>

            <div className="card" style={{ width: '400px' }}>
                <div className="card-header">
                    Header
                </div>
                <div className="card-body">
                    <h4 className="card-title">Card Title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam ad architecto impedit rem!</p>
                </div>
            </div>

            {/* Card without header */}

            <div className="card" style={{ width: '400px' }}>
                <div className="card-body" >
                    <h4 className="card-title">Card Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias?</p>
                    <a href="" className="card-link">Read More</a>
                    <a href="" className="card-link">Subscribe</a>
                </div>
            </div>

            {/* Card with image */}
            <div class="card" style={{ width: '30rem' }}>
                {/* <img src={pink} class="card-image" alt="..." /> */}
                <div className="card-image" style={{ backgroundImage: `url(${pink})` }}></div>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn" style={{ background: '#2c3e50' }}>Go somewhere</a>
                </div>
            </div>

            {/* Well Card */}
            <div className="card" style={{ width: '300px' }}>
                <div className="card-body">
                    Some Text
            </div>
            </div>

            {/* Horizontal card with image */}
            <div className="card card-horizontal" style={{ width: '500px' }}>
                <div className="card-image" style={{ backgroundImage: `url(${book})` }}></div>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn" style={{ background: '#2c3e50' }}>Go somewhere</a>
                </div>
            </div>

        </div>
    )
}

export default Card;
