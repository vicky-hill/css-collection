import React from 'react'

function BurgerNav() {
    return (
        <div className="burger-navigation_natours">
            <input type="checkbox" id="burger-navigation-toggle" className="burger-navigation-checkbox_natours"/>
            <label htmlFor="burger-navigation-toggle" className="burger-navigation-btn_natours">
                <span className="burger-navigation-icon_natours"></span>
            </label>
            <div className="burger-navigation-background_natours">
                &nbsp;
            </div>

            <nav className="burger-navigation-nav_natours">
                <ul className="burger-navigation-list_natours">
                    <li className="burger-navigation-item_natours"><a href="" className="burger-navigation-link_natours">Home</a></li>
                    <li className="burger-navigation-item_natours"><a href="" className="burger-navigation-link_natours">Products</a></li>
                    <li className="burger-navigation-item_natours"><a href="" className="burger-navigation-link_natours">About</a></li>
                    <li className="burger-navigation-item_natours"><a href="" className="burger-navigation-link_natours">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default BurgerNav
