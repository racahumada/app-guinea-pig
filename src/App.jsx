import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Login from './components/login/Login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import PrivateRoute from './components/privateroute/PrivateRoute.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
