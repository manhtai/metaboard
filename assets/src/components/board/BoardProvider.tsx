import React, {useContext} from 'react';
import * as API from '../../api';
import logger from '../../logger';
import {Board} from '../../types';
import {parseResponseErrors} from '../../util'


export const BoardContext = React.createContext<{
  fetching: boolean;
  saving: boolean;
  currentUser: any;

  board: any;
  errors: any;
  errorMessage: string;

  onUpdateBoard: (boardId: string, params: any) => any;
  onCreateBoard: (params: any) => any;
  fetchAllBoards: () => Promise<Array<Board>>;
  fetchBoardById: (id: string) => Promise<Board | void>;
}>({
  fetching: true,
  saving: true,
  currentUser: null,

  board: null,
  errors: null,
  errorMessage: '',

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
  errors: null;
  errorMessage: string;
}


export class BoardProvider extends React.Component<Props, State> {
  state: State = {
    fetching: false,
    saving: false,
    errors: null,
    errorMessage: '',
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
      errorMessage: '',
      errors: null,
    })

    try {
      const board = await API.createBoard({ board: params })
      this.setState({ board, saving: false })
    } catch (err) {
      const [errorMessage, errors] = parseResponseErrors(err)
      this.setState({ board, errors, errorMessage, saving: false })
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
      errorMessage: '',
      errors: null,
    })

    try {
      await API.updateBoard(boardId, {
        board: params,
      })
      this.setState({ saving: false })
    } catch (err) {
      const [errorMessage, errors] = parseResponseErrors(err)
      this.setState({ board, errors, errorMessage, saving: false })
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
    this.setState({ fetching: false, board })
    return board
  }


  render() {
    const {
      fetching,
      saving,
      currentUser,
      board,
      errors,
      errorMessage,
    } = this.state

    return (
      <BoardContext.Provider
        value={{
            fetching,
            saving,
            currentUser,
            board,
            errors,
            errorMessage,

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
