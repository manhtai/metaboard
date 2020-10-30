import React from 'react';

import {formatDateAgo, getColorByOrder} from "../../util";
import {Board, Player} from "../../types"


function Count(props: Player & {index: number}) {

  const color = getColorByOrder(props.index)
  const label = ` bg-${color}-500 `
  const count = ` text-${color}-700 bg-${color}-100 border-${color}-400`

  return (
    <div className="flex-initial m-4 text-center rounded-3xl">
      <div className={"px-4 py-2 text-white rounded-t" + label}>
        { props.name }
      </div>
      <div className={"px-4 py-3 font-bold text-6xl border border-t-0 rounded-b" + count}>
        { props.score }
      </div>
    </div>
  )
}

type State = {
  loaded: boolean
}

export default class Counter extends React.Component<Board, State> {
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

        <div className="flex flex-row flex-wrap content-center justify-center mb-10 place-items-center ">
          { this.props.items
            .map((d, index) =>
              ({
                ...d,
                index,
              })
            ).map(d => <Count {...d} key={d.id} />)
            }
        </div>

        <div className="mx-auto mt-10 text-xs text-center text-gray-500">
          Created {formatDateAgo(this.props.created_at)}. Updated {formatDateAgo(this.props.updated_at)}.
        </div>
      </div>
    </>
  )} 
}
