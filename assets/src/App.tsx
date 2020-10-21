import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect from="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
