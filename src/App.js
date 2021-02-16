import React from 'react';
import './sass/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/navigation/Home';
import Button from './components/elements/Buttons';
import Alert from './components/elements/Alerts';
import Grid from './components/elements/basic/Grid';
import Navbar from './components/elements/Navbars';
import Proshop from './components/styles/Proshop';
import Form from './components/elements/Forms';
import Card from './components/elements/Cards';
import Basic from './components/styles/Basic';
import Badge from './components/elements/Badges';
import List from './components/elements/Lists';
import Natours from './components/styles/Natours';


function App() {
  return (
    
      <Router>
       <Switch>
          <Route exact path='/' component={Home} />
          
          {/* Elements */}
          <Route exact path='/elements/buttons' component={Button} />
          <Route exact path='/elements/alerts' component={Alert} />
          <Route exact path='/elements/navbars' component={Navbar} />
          <Route exact path='/elements/forms' component={Form} />
          <Route exact path='/elements/cards' component={Card} />
          <Route exact path='/elements/badges' component={Badge} />
          <Route exact path='/elements/lists' component={List} />
          <Route exact path='/elements/grid' component={Grid} />
          

          {/* Styles */}
          <Route exact path='/styles/proshop' component={Proshop} />
          <Route exact path='/styles/basic' component={Basic} />
          <Route exact path='/styles/natours' component={Natours} />

  

       </Switch>
      </Router>

  );
}

export default App;
