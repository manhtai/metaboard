import React, {useEffect, useState} from 'react';

import Navbar from "./BoardNav";
import BoardItem from "./BoardItem";
import CreateBoardModal from "./CreateBoardModal";
import Loading from "../common/Loading";
import {RouteComponentProps} from 'react-router-dom';

import {
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useBoards} from './BoardProvider'
import {Board} from '../../types'


export default function AllBoards(props: RouteComponentProps) {
  const [boards, setBoards] = useState<Board[]>([])
  const [loading, setLoading] = useState(true)

  const [showCreateModal, setShowCreateModal] = React.useState(false)
  const { fetchAllBoards, onCreateBoard, saving, board, errorMessage } = useBoards()

  useEffect(() => {
    fetchAllBoards().then((boards) => {
      setBoards(boards)
      setLoading(false)
    })
  }, [fetchAllBoards])


  return (
    <>
      <Navbar type={"list"} />
      { loading ? <Loading /> :(
      <section className="container relative flex items-center content-center justify-center pt-8 pb-16 mx-auto">
        <div className="w-full mt-16 max-w-screen-md">
          <div className="flex flex-row flex-wrap justify-between mx-3 mb-10">
            <div className="flex flex-row mt-3">
              <div
                className="self-center px-4 py-2 text-white bg-blue-500 rounded-full shadow cursor-pointer hover:bg-blue-600"
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
            { boards.map(d => <BoardItem {...d} key={d.id} />) }
          </div>
        </div>
      </section>
        ) }
      <CreateBoardModal
        {...props}
        create={onCreateBoard}
        board={board}
        error={errorMessage}
        loading={saving}
        visible={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        onOk={() => setShowCreateModal(false)}
      />
    </>
  )
}
