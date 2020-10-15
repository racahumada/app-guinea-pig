import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="appContainer">
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
