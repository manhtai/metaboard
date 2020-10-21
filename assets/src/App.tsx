import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
