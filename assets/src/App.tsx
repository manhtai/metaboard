import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/landing/Landing';
import LoginPage from './components/auth/Login';
import Signup from './components/auth/Signup';
import AllBoards from './components/board/AllBoards';
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
          <Route path="/home" component={Landing} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={Signup} />
          <Redirect from="/*" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Landing} />
        <Route path="/boards" component={AllBoards} />
        <Redirect from="/*" to="/boards" />
      </Switch>
    </BrowserRouter>
  );

}

export default App;
