import React from 'react';

import {
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {formatDateAgo, getColorByOrder} from "../../util";
import {Board, Player} from "../../types"


function PlayerBar(props: Player) {

  const color = " bg-" + getColorByOrder(props.index) + "-500 "

  return (
    <>
      <div className="flex flex-row content-center justify-center w-full py-3 justify-items-stretch">
        <div className="self-center flex-none w-24 pr-4 text-right">
          <div className="right-0 inline-block px-3 py-1 font-bold text-center text-gray-800 bg-gray-400 rounded-full shadow-sm">
            {props.index + 1}
          </div>
        </div>
        <div className="relative self-center flex-1 w-64 font-semibold">
          <div
            className={"absolute p-3 overflow-hidden text-white whitespace-no-wrap rounded transition-all ease-out duration-1000 " + color}
            style={{ width: props.percentage }}
          >
            {props.name} {props.index === 0 && props.score ? <FontAwesomeIcon className="ml-1" icon={faTrophy} /> : null}
          </div>
          <div className="w-full p-3 truncate bg-gray-200 rounded">
            {props.name} {props.index === 0 && props.score ? <FontAwesomeIcon className="ml-1" icon={faTrophy} /> : null}
          </div>
        </div>
        <div className="self-center flex-none w-24 pl-4 font-semibold">
          {props.score}p
        </div>
      </div>
    </>
  )

}

type State = {
  loaded: boolean
}

export default class LeaderBoard extends React.Component<Board, State> {
  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 200)
  }

  render() {
   return (
    <>
      <div className="w-full pt-8 pb-16 mx-auto mt-6 max-w-screen-md">
        <div className="max-w-xl px-2 mx-auto mt-6 mb-10 ">
          <h1 className="text-2xl font-semibold text-center">
          { this.props.name }
          </h1>
        </div>
        <div className="mb-10">
          { this.props.items && this.props.items
            .map(d =>
              ({
                ...d,
                percentage: (this.props.max_score && this.state && this.state.loaded ? d.score/this.props.max_score*100 : 0) + "%"
              })
            ).map(d => <PlayerBar {...d} key={d.id} />)
            }
        </div>

        <div className="mx-auto mt-10 text-xs text-center text-gray-500">
          Created {formatDateAgo(this.props.created_at)}. Updated {formatDateAgo(this.props.updated_at)}.
        </div>
      </div>
    </>
  )} 
}
