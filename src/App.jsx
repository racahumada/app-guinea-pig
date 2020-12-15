import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyle';
import { theme } from './config/theme';
import { Header } from './components/index';
import { PrivateRoute } from './routes/index';
import { Dashboard, Login, SignUp } from './containers/index';
import { AuthProvider } from './providers/auth/authContext.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <>
          <GlobalStyles />
          <Router>
            <Header />
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
