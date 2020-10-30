import React from 'react'
import Counter from './Counter'
import LeaderBoard from './LeaderBoard'


import {Board} from '../../types'

export default function BoardDisplay(props: Board) {
  return props.type === 'leaderboard'
    ? <LeaderBoard {...props} />
    : props.type === 'counter'
    ? <Counter {...props} />
    : null
}
