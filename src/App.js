import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
