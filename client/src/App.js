import React, { Fragment }from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import ContactState from './components/context/contact/contactState.js';
import AuthState from './components/context/auth/authState.js';

const App = () => {
  return (
    <AuthState>
    <ContactState>
    <Router>
      <Fragment>
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Login' component={Login} />
            </Switch>
          </div>
      </Fragment>
    </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
