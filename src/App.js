import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Portal from './components/pages/Portal';
import LoginPage from './components/pages/Login';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './components/pages/Help';
import Contact from './components/pages/Contact';
import Video from './components/pages/Video';


function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Portal' component={Portal} />
          <Route path='/Login' exact component={LoginPage} />
          <Route path='/Products' exact component={Products} />
          <Route path='/Services' exact component={Services} />
          <Route path='/Help' exact component={Help} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Video' exact component={Video} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
