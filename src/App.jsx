import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyle';
import { theme } from './config/theme';
import {
  Dashboard,
  Login,
  Navbar,
  PrivateRoute,
  SignUp,
} from './components/index.js';
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
