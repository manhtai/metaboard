import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/landing/Landing';
import LoginPage from './components/auth/Login';
import SignupPage from './components/auth/Signup';
import MePage from './components/auth/Me';
import FaqPage from './components/page/Faq';

import BoardList from './components/board/BoardList';
import BoardDetail from './components/board/BoardDetail';
import BoardSharing from './components/board/BoardSharing';

import {useAuth} from './components/auth/AuthProvider';

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return null;
  }

  if (!auth.isAuthenticated) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/landing" component={LandingPage} />
          <Route path="/faq" component={FaqPage} />

          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />

          <Route path="/s/:code" component={BoardSharing} />

          <Redirect from="/" to="/landing" />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={LandingPage} />
        <Route path="/faq" component={FaqPage} />

        <Route path="/s/:code" component={BoardSharing} />

        <Route path="/me" component={MePage} />

        <Route path="/boards/:id" component={BoardDetail} />
        <Route path="/boards" component={BoardList} />
        <Redirect from="/*" to="/boards" />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
