import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <h1>Elements</h1>
            <a href="/elements/alerts" className="block">Alerts</a>     
            <a href="/elements/badges" className="block">Badges</a>
            <a href="/elements/buttons" className="block">Buttons</a>     
            <a href="/elements/cards" className="block">Cards</a>  
            <a href="/elements/forms" className="block">Forms</a>    
            <a href="/elements/lists" className="block">Lists</a>  
            <a href="/elements/navbars" className="block">Navbars</a>     
            
    

            <h1 className="mt-5">Styles</h1>
            <a href="/styles/awesome" className="block">Awesome</a>     
            <a href="/styles/basic" className="block">Basic</a>     
            <a href="/styles/proshop" className="block">Proshop</a>     
            <a href="/styles/natours" className="block">Natours</a>     

        </div>
    )
}

export default Home;
