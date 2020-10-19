import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Redirect from="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
