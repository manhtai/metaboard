import React from 'react';

import Navbar from "./BoardNav";
import {formatDateAgo, getColorByOrder} from "../../util";


type Player = {
  index: number,
  id: string,
  name: string,
  score: number,
  percentage: string,
}


function Player(props: Player) {

  const color = "bg-" + getColorByOrder(props.index) + "-500"

  return (
    <>
      <div className="flex flex-row content-center justify-center w-full py-3 justify-items-stretch">
        <div className="self-center flex-none w-24 pr-4 text-right">
          <div className="right-0 inline-block px-3 py-1 font-bold text-center text-gray-700 bg-gray-200 rounded-full">
            {props.index + 1}
          </div>
        </div>
        <div className="relative self-center flex-1 w-64">
          <div
            className={"absolute p-3 overflow-hidden text-white whitespace-no-wrap rounded " + color}
            style={{ width: props.percentage }}
          >
            {props.name}
          </div>
          <div className="w-full p-3 truncate bg-gray-200 rounded">
            {props.name}
          </div>
        </div>
        <div className="self-center flex-none w-24 pl-4 font-semibold">
          {props.score}p
        </div>
      </div>
    </>
  )

}


export default function BoardDetail() {
  const data = {
    id: "abcd",
    name: "Class of 2020 leaderboard very long name without and end, now what",
    code: "2020class",
    type: "leaderboard",
    updated_at: 1603460198000,
    created_at: 1603460198000,
    items: [
      {
        id: "0",
        index: 0,
        name: "Noal Lauren",
        score: 150,
      },
      {
        id: "1",
        index: 1,
        name: "David Ronaldo",
        score: 100,
      },
      {
        id: "2",
        index: 2,
        name: "David Ronaldo",
        score: 99,
      },
      {
        id: "3",
        index: 3,
        name: "David Ronaldo",
        score: 98,
      },
      {
        id: "4",
        index: 4,
        name: "David Ronaldo",
        score: 97,
      },
      {
        id: "5",
        index: 5,
        name: "David Ronaldo",
        score: 96,
      },
      {
        id: "6",
        index: 6,
        name: "David Ronaldo",
        score: 95,
      },
      {
        id: "7",
        index: 7,
        name: "David Ronaldo",
        score: 94,
      },
      {
        id: "8",
        index: 8,
        name: "David Ronaldo",
        score: 93,
      },
      {
        id: "9",
        index: 9,
        name: "David Ronaldo",
        score: 92,
      },
      {
        id: "10",
        index: 10,
        name: "David Ronaldo",
        score: 91,
      },
      {
        id: "323",
        index: 323,
        name: "Golia Beckham",
        score: 50,
      },
    ],
    max_score: 150,
  };

  return (
    <>
      <Navbar />
      <section className="relative flex items-center content-center justify-center pt-8 pb-16">
        <div className="content-center w-full mt-16 max-w-screen-md">
          <div className="max-w-xl px-2 mx-auto mt-6 mb-10 ">
            <h1 className="text-2xl font-semibold text-center">
            { data.name }
            </h1>
          </div>
          <div className="mb-10">
            { data.items
                .map(d => ({...d, percentage: d.score/data.max_score*100 + "%"}))
                .map(d => <Player {...d} />)
              }
          </div>

          <div className="mx-auto mt-10 text-xs text-center text-gray-500">
            Updated { formatDateAgo(data.updated_at) }
          </div>
        </div>
      </section>
    </>
  )
}

