import React from 'react';

import Navbar from "../common/Navbar";
import {formatDateAgo} from "../../util";

import {
  faPlus,
  faSearch,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Board = {
  id: string;
  name: string;
  code: string;
  type: string;
  updated_at: number;
  created_at: number;
};

function BoardItem(props: Board) {

  return (
    <>
      <div className="px-6 py-3 mx-3 my-4 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200">
        <div className="flex flex-row justify-between">
          <div className="w-7/12 md:w-10/12 lg:w-10/12">
            <h2 className="overflow-hidden text-xl font-semibold text-blue-900 truncate">{props.name}</h2>
          </div>
          <div className="self-center px-2 font-semibold text-white capitalize bg-green-600 rounded-2xl">
            {props.type}
          </div>
        </div>

        <div className="w-full mb-2 text-xs text-gray-700 uppercase truncate">
          {props.code}
        </div>

        <div className="flex flex-row flex-wrap justify-between my-1">
          <div className="text-sm italic text-gray-700">
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
      name: "Class of 2020 leaderboard very long name without and end, now what",
      code: "2020class",
      type: "leaderboard",
      updated_at: 1603460198000,
      created_at: 1603460198,
    },
    {
      id: "abce",
      name: "Soccer scoreboard",
      code: "2020classsockerboardgame",
      type: "scoreboard",
      updated_at: 1603460198,
      created_at: 1603460198,
    },
    {
      id: "abcf",
      name: "Score counter",
      code: "counter2020classsockerboardgame",
      type: "counter",
      updated_at: 1603460198,
      created_at: 1603460198,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative flex items-center content-center justify-center pt-8 pb-16">
        <div className="w-full mt-16 max-w-screen-md">
          <div className="flex flex-row flex-wrap justify-between mx-3 mb-10">
            <div className="flex flex-row mt-3">
              <div className="self-center px-4 py-2 text-white bg-blue-500 border rounded-full cursor-pointer hover:bg-blue-600">
                New board <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="self-center px-4 py-2 ml-3 border border-gray-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white">
                Import... <FontAwesomeIcon icon={faFileImport} />
              </div>
            </div>
            <div className="flex w-full max-w-sm mt-3">
              <div className="self-center flex-none px-3 py-2 text-gray-700 bg-gray-100 border-t border-b border-l border-gray-400 rounded-l-sm">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                className="flex-1 w-full px-2 py-1 text-gray-700 placeholder-gray-700 bg-white border border-gray-400 rounded-r-sm focus:outline-none focus:border-blue-500"
                placeholder="Type to search..."
              />
            </div>
          </div>
          <div>
            { data.map(d => <BoardItem {...d} key={d.id} />) }
          </div>
        </div>
      </section>
    </>
  )
}
