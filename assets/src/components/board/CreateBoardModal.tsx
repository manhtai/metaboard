import React from "react";

import {
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  visible: boolean,
  onCancel: () => void,
  onOk: () => void,
}

export default function CreateBoardModal(props: Props) {

  return (
    <>
      {props.visible ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto w-11/12 max-w-lg mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between px-5 py-4 border-b border-gray-200 border-solid rounded-t">
                  <h3 className="text-lg font-semibold">
                    Create a new board
                  </h3>
                  <button
                    className="float-right ml-auto leading-none text-gray-500 bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={props.onCancel}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="block w-6 h-6 bg-transparent outline-none opacity-5 focus:outline-none"
                    />
                  </button>
                </div>

                <div className="p-5 text-sm">
                  <div className="mb-4">
                    <label className="inline-block mb-2 font-bold leading-relaxed">
                      Name of board
                    </label>
                    <input
                      className="block w-full px-3 py-3 leading-tight border border-gray-400 rounded-sm appearance-none focus:border-blue-500 focus:outline-none"
                      placeholder="My new board..."
                      maxLength={100}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="inline-block mb-2 font-bold leading-relaxed">
                      Board code (Optional)
                    </label>
                    <div
                      className="block w-full px-3 py-3 leading-tight border border-gray-400 rounded-sm appearance-none hover:border-blue-500"
                    >
                      <span className="text-gray-700">{"https://metaboard.net/s/"}</span>
                      <input
                        className="ml-1 uppercase border-none outline-none"
                        placeholder="CODE"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="inline-block mb-2 font-bold leading-relaxed">
                      Board type
                    </label>
                    <div className="relative">
                      <select className="block w-full px-2 py-3 leading-tight border border-gray-400 rounded-sm appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                      disabled>
                        <option value="leaderboard">Leaderboard</option>
                        <option value="scoreboard">Scoreboard</option>
                        <option value="counter">Counter</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 bg-gray-300 border border-gray-400 rounded-r-sm pointer-events-none">
                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-5 text-sm">
                    <button
                      className="px-4 py-2 mb-1 mr-1 text-white bg-blue-500 rounded-full shadow outline-none active:bg-blue-400 hover:bg-blue-600"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={props.onOk}
                    >
                      Create Board
                    </button>
                    <button
                      className="px-4 py-2 mb-1 ml-1 bg-gray-300 rounded-full outline-none hover:bg-gray-400 active:bg-gray-200"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={props.onCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
