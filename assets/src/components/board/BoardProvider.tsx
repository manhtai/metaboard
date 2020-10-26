import React, {useContext} from 'react';
import * as API from '../../api';
import logger from '../../logger';
import {Board} from '../../types';


export const BoardContext = React.createContext<{
  fetching: boolean;
  saving: boolean;
  currentUser: any;

  board: any;
  error: string;

  onUpdateBoard: (boardId: string, params: any) => any;
  onCreateBoard: (params: any) => any;
  fetchAllBoards: () => Promise<Array<Board>>;
  fetchBoardById: (id: string) => Promise<Board | void>;
}>({
  fetching: true,
  saving: true,
  currentUser: null,

  board: null,
  error: '',

  onUpdateBoard: () => {},
  onCreateBoard: () => {},
  fetchAllBoards: () => Promise.resolve([]),
  fetchBoardById: () => Promise.resolve(),
})

export const useBoards = () => useContext(BoardContext)


type Props = React.PropsWithChildren<{}>;
type State = {
  fetching: boolean;
  saving: boolean;
  currentUser: any;
  board: any;
  error: string;
}


export class BoardProvider extends React.Component<Props, State> {
  state: State = {
    fetching: true,
    saving: true,
    error: '',
    board: null,
    currentUser: null,
  }

  async componentDidMount() {
    const currentUser = await API.me()
    this.setState({ currentUser })
  }

  handleCreateBoard = async (params: any) => {
    const { board } = this.state

    this.setState({
      board: {
        ...board,
        ...params,
      },
      saving: true,
      error: '',
    })

    try {
      const board = await API.createBoard({ board: params })
      this.setState({ board, saving: false })
    } catch (err) {
      const error = this.parseError(err)
      this.setState({ board, error, saving: false })
      logger.error(err)
    }
  }

  handleUpdateBoard = async (boardId: string, params: any) => {
    const { board } = this.state

    this.setState({
      board: {
        ...board,
        ...params,
      },
      saving: true,
      error: '',
    })

    try {
      await API.updateBoard(boardId, {
        board: params,
      })
      this.setState({ saving: false })
    } catch (err) {
      const error = this.parseError(err)
      this.setState({ board, error, saving: false })
      logger.error(err)
    }
  }

  fetchAllBoards = async () => {
    this.setState({ fetching: true })
    const boards = await API.fetchAllBoards()
    this.setState({ fetching: false })
    return boards
  }

  fetchBoardById = async (boardId: string) => {
    this.setState({ fetching: true })
    const board = await API.fetchBoardById(boardId)
    this.setState({ fetching: false })
    return board
  }

  parseError = (err: any) => {
    const errors = err.response?.body?.error?.errors
    if (errors) {
      const [field, error] = Object.entries(errors)[0]
      return `${field} ${Array.isArray(error) ? error[0] : error}`
    }
    return err.response?.body?.error?.message || "Server error"
  }

  render() {
    const {
      fetching,
      saving,
      currentUser,
      board,
      error,
    } = this.state

    return (
      <BoardContext.Provider
        value={{
            fetching,
            saving,
            currentUser,
            board,
            error,

            onUpdateBoard: this.handleUpdateBoard,
            onCreateBoard: this.handleCreateBoard,
            fetchBoardById: this.fetchBoardById,
            fetchAllBoards: this.fetchAllBoards,
        }}
      >
        {this.props.children}
      </BoardContext.Provider>
    )
  }
}
