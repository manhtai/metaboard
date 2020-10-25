import React, {useContext} from 'react';
import * as API from '../../api';
import logger from '../../logger';
import {Board} from '../../types';


export const BoardContext = React.createContext<{
  loading: boolean;
  currentUser: any;

  onUpdateBoard: (boardId: string, params: any) => any;
  createBoard: (params: any) => any;
  fetchAllBoards: () => Promise<Array<Board>>;
  fetchBoardById: (id: string) => Promise<Board | void>;
}>({
  loading: true,
  currentUser: null,

  onUpdateBoard: () => {},
  createBoard: () => {},
  fetchAllBoards: () => Promise.resolve([]),
  fetchBoardById: () => Promise.resolve(),
})

export const useBoards = () => useContext(BoardContext)


type Props = React.PropsWithChildren<{}>;
type State = {
  loading: boolean;
  currentUser: any;
  boardsById: {[key: string]: any};
}


export class BoardProvider extends React.Component<Props, State> {
  state: State = {
    loading: true,
    currentUser: null,
    boardsById: {},
  }

  async componentDidMount() {
    const currentUser = await API.me()
    this.setState({ currentUser })
  }

  handleUpdateBoard = async (boardId: string, params: any) => {
    this.setState({ loading: true })
    const { boardsById } = this.state
    const existing = boardsById[boardId]

    this.setState({
      boardsById: {
        ...boardsById,
        [boardId]: { ...existing, ...params }
      }
    })

    try {
      await API.updateBoard(boardId, {
        board: params,
      })
      this.setState({ loading: false })
    } catch (err) {
      this.setState({ boardsById: boardsById, loading: false })
      logger.error(err)
    }
  }

  fetchAllBoards = async () => {
    this.setState({ loading: true })
    const boards = await API.fetchAllBoards()
    this.setState({ loading: false })
    return boards
  }

  fetchBoardById = async (boardId: string) => {
    this.setState({ loading: true })
    const board = await API.fetchBoardById(boardId)
    this.setState({ loading: false })
    return board
  }

  createBoard = async (params: any) => {
    this.setState({ loading: true })
    const board = await API.createBoard(params)
    this.setState({ loading: false })
    return board
  }

  render() {
    const {
      loading,
      currentUser,
    } = this.state

    return (
      <BoardContext.Provider
        value={{
            loading,
            currentUser,

            onUpdateBoard: this.handleUpdateBoard,
            fetchBoardById: this.fetchBoardById,
            fetchAllBoards: this.fetchAllBoards,
            createBoard: this.createBoard,
        }}
      >
        {this.props.children}
      </BoardContext.Provider>
    )
  }
}
