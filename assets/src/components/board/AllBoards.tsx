import React from 'react';

import Navbar from "../common/Navbar";
import {formatDateAgo} from "../../util";


type Board = {
  id: string;
  name: string;
  type: string;
  updated_at: number;
  created_at: number;
};

function BoardItem(props: Board) {

  return (
    <>
      <div className="px-6 py-3 mx-3 my-4 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200">
        <div className="flex flex-row">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-blue-900">{props.name}</h2>
          </div>
          <div className="self-center px-2 font-semibold text-white capitalize bg-green-600 rounded-2xl">
            {props.type}
          </div>
        </div>

        <div className="flex flex-row my-1">
          <div className="text-sm text-gray-700">
            Updated <span>{formatDateAgo(props.updated_at)}</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default function AllBoards() {
  const data = [
    {
      id: "abcd",
      name: "Class of 2020 leaderboard",
      type: "leaderboard",
      updated_at: 1603460198000,
      created_at: 1603460198,
    },
    {
      id: "abce",
      name: "Soccer scoreboard",
      type: "scoreboard",
      updated_at: 1603460198,
      created_at: 1603460198,
    },
    {
      id: "abcf",
      name: "Score counter",
      type: "counter",
      updated_at: 1603460198,
      created_at: 1603460198,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative flex items-center content-center justify-center pt-16 pb-32">
        <div className="w-full mt-16 max-w-screen-md">
          { data.map(d => <BoardItem {...d} key={d.id} />) }
        </div>
      </section>
    </>
  )
}
