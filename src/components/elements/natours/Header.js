import React from 'react';
import logo from './img/logo-white.png';

const Header = () => {
    return (
        <div className="natours">
            <header class="header_natours">
                <div class="header-logo_natours">
                    <img src={logo} alt="Logo" class="logo_natours" />
                </div>

                <div class="text-box_natours">
                    <h1 class="heading-primary_natours">
                        <span class="heading-primary-main_natours">Memorize</span>
                        <span class="heading-primary-sub_natours">the pineapple way</span>
                    </h1>

                    <a href="" class="btn_natours btn-white_natours btn-animated_natours">Get the Linguar app</a>
                </div>
            </header>
        </div>



    )
}

export default Header;
