import React from 'react';

import Navbar from "./BoardNav";
import {formatDateAgo} from "../../util";


type Player = {
  order: number,
  id: string,
  name: string,
  score: number,
}


function Player(props: Player) {

  return (
    <>
      <div className="flex flex-row content-center justify-center w-full py-3 justify-items-stretch">
        <div className="self-center flex-none w-24 pr-4 text-right">
          <div className="right-0 inline-block px-3 py-1 font-bold text-center text-gray-700 bg-gray-200 rounded-full">
            {props.order}
          </div>
        </div>
        <div className="flex-1 w-64 px-3 py-3 bg-gray-100 rounded">
          {props.name}
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
        id: "3",
        order: 1,
        name: "Noal",
        score: 150,
      },
      {
        id: "1",
        order: 2,
        name: "David",
        score: 100,
      },
      {
        id: "2",
        order: 323,
        name: "Golia",
        score: 50,
      },
    ],
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
            { data.items.map(d => <Player {...d} />) }
          </div>

          <div className="mx-auto mt-10 text-xs text-center text-gray-500">
            Updated { formatDateAgo(data.updated_at) }
          </div>
        </div>
      </section>
    </>
  )
}

