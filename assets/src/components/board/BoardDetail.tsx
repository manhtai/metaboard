import React, {useEffect, useState, useCallback} from 'react';

import Navbar from "./BoardNav";
import LeaderBoard from "./LeaderBoard";
import {Player} from "../../types"
import {RouteComponentProps} from 'react-router-dom';
import Loading from "../common/Loading";
import debounce from "lodash/debounce";
import { v4 } from "uuid";

import {
  faPlus,
  faTimes,
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useBoards} from './BoardProvider'


type PlayerProps = Player & {
  onChange: (items: any) => void;
  onDelete: (id: string) => void;
}

type PlayerState = {
  id: string;
  name: string;
  score: number;
}


function PlayerEdit(props: PlayerProps) {
  const [state, setState] = useState<PlayerState>({
    id: props.id,
    name: props.name,
    score: props.score,
  })

  const handleChangeName = (e: any) => {
    const newState = { ...state, name: e.target.value }
    setState(newState)
    props.onChange({ ...newState })
  }

  const handleChangeScore = (e: any) => {
    const newState = { ...state, score: e.target.value }
    setState(newState)
    props.onChange({ ...newState })
  }

  return (
    <div className="flex flex-row py-3 justify-items-stretch">
      <div className="flex-grow mr-2">
        <input
          className="w-full p-1 border border-gray-400 rounded-sm appearance-none focus:border-blue-500 focus:outline-none"
          value={state.name}
          onChange={handleChangeName}
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div className="flex-none w-20 text-right">
        <input
          className="w-full p-1 border border-gray-400 rounded-sm appearance-none focus:border-blue-500 focus:outline-none"
          value={state.score}
          onChange={handleChangeScore}
          placeholder="Score"
          type="number"
          required
        />
      </div>
      <div className="self-center flex-none w-4 text-right">
        <FontAwesomeIcon
          icon={faTimes}
          className="text-gray-500 cursor-pointer"
          onClick={() => props.onDelete(props.id)}
        />
      </div>
    </div>
  )
}


type Props = RouteComponentProps<{id: string}> & {}
type State = {
  loading: boolean;
  name: string;
  code: string;
  type: string;
  sortName: number;
  sortScore: number;
  items: any[];
}

export default function BoardDetail(props: Props) {
  const [state, setState] = useState<State>({
    loading: true,
    name: '',
    code: '',
    type: '',
    items: [],
    sortName: 0,
    sortScore: 0,
  })

  const { onUpdateBoard, fetchBoardById, board, errors } = useBoards()
  const { id } = props.match.params
  const sharePath = window.location.protocol + "//" + window.location.host + "/s/"

  const backToList = useCallback(() => props.history.push("/boards"), [props.history])

  const debounceHandler = useCallback(
    debounce((params: any) => {
      onUpdateBoard(id, params)
    }, 500),
    []
  );

  useEffect(() => {
    fetchBoardById(id)
      .then((b) => {
        if (b) {
          const { name, code, type } = b
          setState({ name, code, type, items: b.items || [], loading: false, sortScore: 0, sortName: 0 })
        }
      })
    .catch(backToList)
  }, [fetchBoardById, id, backToList])


  const handleChangeName = useCallback((e: any) => {
    const name = e.target.value
    setState({ ...state, name })
    if (name) {
      debounceHandler({ name })
    }
  }, [debounceHandler, state])

  const handleChangeCode = useCallback((e: any) => {
    const code = e.target.value.replaceAll(" ", "")
    setState({ ...state, code })
    if (code) {
      debounceHandler({ code })
    }
  }, [debounceHandler, state])

  const handleChangeType = useCallback((e: any) => {
    const type = e.target.value
    setState({ ...state, type })
    debounceHandler({ type })
  }, [debounceHandler, state])

  const handleChangeItems = useCallback((itemChanged: any) => {
    const { items } = state
    const changedItems = items
      .map((item) => item.id === itemChanged.id ? itemChanged : item)

    setState({ ...state, items: changedItems })
    debounceHandler({ items: changedItems.filter((item) => item.name && !isNaN(parseFloat(item.score))) })

  }, [debounceHandler, state])

  const handleDeleteItem = useCallback((id: string) => {
    const { items } = state
    const changedItems = items.filter((item) => item.id !== id)

    setState({ ...state, items: changedItems })
    debounceHandler({ items: changedItems.filter((item) => item.name && !isNaN(parseFloat(item.score))) })

  }, [debounceHandler, state])

  const handleAddMoreItem = () => {
    const { items } = state
    setState({ ...state, items: [...items, {id: v4(), name: '', score: 0}]})
  }

  const sortByName = useCallback(() => {
    const { sortName, items } = state
    if (sortName === 0) {
      const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name))
      setState({ ...state, items: sortedItems, sortName: 1 })
      debounceHandler({ items: sortedItems })
    } else if (sortName === 1) {
      const sortedItems = items.sort((a, b) => b.name.localeCompare(a.name))
      setState({ ...state, items: sortedItems, sortName: -1 })
      debounceHandler({ items: sortedItems })
    } else {
      setState({ ...state, sortName: 0 })
    }
  }, [debounceHandler, state])

  const sortByScore = useCallback(() => {
    const { sortScore, items } = state
    if (sortScore === 0) {
      const sortedItems = items.sort((a, b) => a.score - b.score)
      setState({ ...state, items: sortedItems, sortScore: 1 })
      debounceHandler({ items: sortedItems })
    } else if (sortScore === 1) {
      const sortedItems = items.sort((a, b) => b.score - a.score)
      setState({ ...state, items: sortedItems, sortScore: -1 })
      debounceHandler({ items: sortedItems })
    } else {
      setState({ ...state, sortScore: 0 })
    }
  }, [debounceHandler, state])

  return (<>
      <Navbar />
      { state.loading ? <Loading /> : (
      <section className="container px-4 mx-auto mt-6">
        <div className="flex flex-wrap bg-gray-100 shadow">
          <div className="flex-none w-full max-w-md px-6 py-16 text-sm bg-white shadow-inner">
            <div className="flex flex-col">
              <div className="mb-4">
                <label className="inline-block mb-2 font-bold leading-relaxed">
                  Name of board
                </label>
                <input
                  className="block w-full px-2 py-2 leading-tight border border-gray-400 rounded-sm appearance-none focus:border-blue-500 focus:outline-none"
                  value={state.name}
                  onChange={handleChangeName}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="inline-block mb-2 font-bold leading-relaxed">
                  Short link
                </label>
                <div
                  className="block w-full px-2 py-2 leading-tight border border-gray-400 rounded-sm hover:border-blue-500"
                >
                  <span className="text-gray-700">{sharePath}</span>
                  <input
                    className="ml-1 border-none outline-none appearance-none"
                    placeholder="CODE"
                    maxLength={10}
                    value={state.code}
                    onChange={handleChangeCode}
                    required
                  />
                </div>
                {errors && errors.code && (<div className="mt-1 text-red-500">{"This link " + errors.code}</div>)}
              </div>

              <div className="mb-4">
                <label className="inline-block mb-2 font-bold leading-relaxed">
                  Board type
                </label>
                <div className="relative">
                  <select
                    className="block w-full px-1 py-2 leading-tight border border-gray-400 rounded-sm appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                    value={state.type}
                    onChange={handleChangeType}
                    required
                    disabled
                  >
                    <option value="leaderboard">Leaderboard</option>
                    <option value="scoreboard">Scoreboard</option>
                    <option value="counter">Counter</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 bg-gray-300 border border-gray-400 rounded-r-sm pointer-events-none">
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="inline-block font-bold leading-relaxed">
                  Board items
                </label>
                <div className="flex flex-row mt-2 justify-items-stretch">
                  <div className="flex flex-grow mr-2 place-items-center">
                    <div className="mr-1">Name</div>
                    <span className="cursor-pointer" onClick={sortByName}>
                      {
                        state.sortName === 1 ? <FontAwesomeIcon icon={faSortUp} className="place-items-start" /> :
                        state.sortName === -1 ? <FontAwesomeIcon icon={faSortDown} className="place-items-start" /> :
                        <FontAwesomeIcon icon={faSort} className="place-items-start" />
                      }
                    </span>
                  </div>
                  <div className="flex flex-none w-24 place-items-center">
                    <div className="mr-1">Score</div>
                    <span className="cursor-pointer" onClick={sortByScore}>
                      {
                        state.sortScore === 1 ? <FontAwesomeIcon icon={faSortUp} className="place-items-start" /> :
                        state.sortScore === -1 ? <FontAwesomeIcon icon={faSortDown} className="place-items-start" /> :
                        <FontAwesomeIcon icon={faSort} className="place-items-start" />
                      }
                    </span>
                  </div>
                </div>
                {
                  state.items.map(
                    d => <PlayerEdit
                      {...d}
                      key={d.id}
                      onChange={handleChangeItems}
                      onDelete={handleDeleteItem}
                    />)
                }
              </div>
              <div>
                <div
                  className="self-center w-full px-4 py-2 text-center text-white bg-blue-500 rounded-full shadow cursor-pointer hover:opacity-75"
                  onClick={handleAddMoreItem}
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />
                  Add more
                </div>
              </div>
            </div>
          </div>
          {board && <LeaderBoard {...board} />}
        </div>
      </section>)}
    </>)
}
