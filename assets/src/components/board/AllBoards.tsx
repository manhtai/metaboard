import React from 'react';

import Navbar from "./BoardNav";
import BoardItem from "./BoardItem";
import CreateBoardModal from "./CreateBoardModal";

import {
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

  const [showCreateModal, setShowCreateModal] = React.useState(false)

  return (
    <>
      <Navbar type={"list"} />
      <section className="relative flex items-center content-center justify-center pt-8 pb-16">
        <div className="w-full mt-16 max-w-screen-md">
          <div className="flex flex-row flex-wrap justify-between mx-3 mb-10">
            <div className="flex flex-row mt-3">
              <div
                className="self-center px-4 py-2 text-white bg-blue-500 border rounded-full shadow cursor-pointer hover:bg-blue-600"
                onClick={() => setShowCreateModal(true)}
              >
                New board <FontAwesomeIcon icon={faPlus} />
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
      <CreateBoardModal
        visible={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        onOk={() => setShowCreateModal(false)}
      />
    </>
  )
}
