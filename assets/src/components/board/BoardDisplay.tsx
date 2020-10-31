import React from 'react';
import Counter from './Counter';
import LeaderBoard from './LeaderBoard';

import {Helmet} from 'react-helmet';
import {Board} from '../../types';

export default function BoardDisplay(props: Board) {
  return (
    <>
      <Helmet>
        <title>{props.name ? props.name : 'Metaboard'}</title>
      </Helmet>
      {props.type === 'leaderboard' ? (
        <LeaderBoard {...props} />
      ) : props.type === 'counter' ? (
        <Counter {...props} />
      ) : null}
    </>
  );
}
