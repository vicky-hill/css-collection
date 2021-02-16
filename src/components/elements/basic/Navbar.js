import React from 'react';
import stars from '../../../img/basic/stars.png';

const Navbar = () => {
    return (
        <div className="mb-10">
            <h4 className="mb-5">Basic Navbar</h4>

            <nav className="navbar">

                <img src={stars} class="navbar-logo" loading="lazy"></img>
                <a className="navbar-brand" href="#">CSS Magic</a>

                <div className="navbar-nav">
                    <ul className="nav-list">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Elements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Styles</a>
                        </li>

                    </ul>
                    <form>
                        <input type="search" placeholder="Search" className="input" />
                        <button className="btn ml-4">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
