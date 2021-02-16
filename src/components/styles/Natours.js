import React, { Fragment } from 'react';
import Header from '../elements/natours/Header';
import Heading from '../elements/natours/Heading';
import Photos from '../elements/natours/Photos';
import Card from '../elements/natours/Card';
import Section from '../elements/natours/Section';
import RotatingCard from '../elements/natours/RotatingCard';
import Testimonial from '../elements/natours/Testimonial';
import SolidGradient from '../elements/natours/SolidGradient';
import Form from '../elements/natours/Form';
import Navigation from '../elements/natours/Navigation';
import BurgerNav from '../elements/natours/BurgerNav';
import Modal from '../elements/natours/Modal';

const Natours = () => {
    return (
        <Fragment>
            <BurgerNav />
            <Header />
            <div className="container">
                <Heading />
                <Photos />
                <Card />
            </div>

                <Section />
                
            <div className="container">
                <RotatingCard />
                <Testimonial />
                <SolidGradient />
                <Form />
                <Navigation />
                <Modal />
                <a href="#modal_natours" className="btn_natours btn-purple_natours">Open the model</a>
            </div>
        </Fragment>
    )
}

export default Natours;
