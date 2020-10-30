import React, {useEffect, useState, useCallback} from 'react';

import Navbar from "./BoardNav";
import BoardItem from "./BoardItem";
import CreateBoardModal from "./CreateBoardModal";
import {RouteComponentProps} from 'react-router-dom';
import {debounce} from "lodash"

import {
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useBoards} from './BoardProvider'
import {Board} from '../../types'
import Loading from '../common/Loading'


function EmptyBoard({ isSearching = false }: { isSearching?: boolean }) {
  return (
    <div className="block px-6 py-3 mx-3 my-4 text-center bg-gray-100 border-2 border-dashed rounded-lg">
      { isSearching ? "No boards were found." : "You have not created any board yet." }
    </div>
  )
}

function LoadingBoard() {
  return (
    <div className="block px-6 py-3 mx-3 my-4 border border-gray-300 rounded-lg shadow">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 py-1 space-y-4">
          <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function AllBoards(props: RouteComponentProps) {
  const [boards, setBoards] = useState<Board[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  const [showCreateModal, setShowCreateModal] = React.useState(false)
  const { fetchAllBoards, onCreateBoard, saving, board, errorMessage, currentUser } = useBoards()

  const searchBoards = useCallback(
    debounce((term) => {
      setLoading(true)
      fetchAllBoards(term).then((boards) => {
        setBoards(boards)
        setLoading(false)
      })
   }, 1000),
    [],
  )

  useEffect(() => {
    setLoading(true)
    fetchAllBoards().then((boards) => {
      setBoards(boards)
      setLoading(false)
    })
  }, [fetchAllBoards])


  const handleSearch = (event: any) => {
    const term = event.target.value
    setSearchTerm(term)
    searchBoards(term)
  }

  if (!currentUser) {
    return <Loading />
  }


  return (
    <>
      <Navbar type={"list"} />
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
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div>
            {
              loading ? <LoadingBoard />
              : boards.length ? boards.map(d => <BoardItem {...d} key={d.id} />)
              : <EmptyBoard isSearching={searchTerm.length > 0} />
            }
          </div>
        </div>
      </section>
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
