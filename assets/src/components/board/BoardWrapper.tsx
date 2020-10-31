import React from 'react';
import {Switch, Route, Redirect, RouteComponentProps} from 'react-router-dom';

import {BoardProvider, useBoards} from './BoardProvider';
import MePage from '../auth/Me';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import {Helmet} from 'react-helmet';

const BoardContainer = (props: RouteComponentProps) => {
  const {board} = useBoards();
  return (
    <>
      <Helmet>
        <title>{board?.name ? board.name : 'Metaboard'}</title>
      </Helmet>

      <Switch>
        <Route path="/me" component={MePage} />

        <Route path="/boards/:id" component={BoardDetail} />
        <Route path="/boards" component={BoardList} />
        <Redirect from="/*" to="/boards" />
      </Switch>
    </>
  );
};

const BoardWrapper = (props: RouteComponentProps) => {
  return (
    <BoardProvider>
      <BoardContainer {...props} />
    </BoardProvider>
  );
};

export default BoardWrapper;
