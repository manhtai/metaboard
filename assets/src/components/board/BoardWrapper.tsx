import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

import { BoardProvider } from './BoardProvider'
import MePage from '../auth/Me';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';


const BoardContainer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path="/me" component={MePage} />

      <Route path="/boards/:id" component={BoardDetail} />
      <Route path="/boards" component={BoardList} />
      <Redirect from="/*" to="/boards" />
    </Switch>
  )
}



const BoardWrapper = (props: RouteComponentProps) => {
  return (
    <BoardProvider>
      <BoardContainer {...props} />
    </BoardProvider>
  )
}

export default BoardWrapper
