import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyle';
import { theme } from './config/theme';
import Navbar from './components/Navbar/Navbar.jsx';
import SignUp from './components/Signup/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import PrivateRoute from './components/Privateroute/PrivateRoute.jsx';
import { AuthProvider } from './providers/auth/authContext.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <>
          <GlobalStyles />
          <Router>
            <Navbar />
            <Switch>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
            </Switch>
          </Router>
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
