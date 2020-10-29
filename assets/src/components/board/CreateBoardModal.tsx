import React from "react";

import {
  faTimes,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RouteComponentProps } from 'react-router-dom';
import {haiku} from '../../util'

type Props = RouteComponentProps & {
  create: (params: any) => Promise<any>,
  visible: boolean,
  loading: boolean,
  onCancel: () => void,
  onOk: () => void,
  board: any,
  error: any,
}

type State = {
  submitted: boolean;
  name: string;
  code?: string;
  type: string;
};

export default class CreateBoardModal extends React.Component<Props, State> {

  state: State = {
    submitted: false,
    name: '',
    code: '',
    type: 'leaderboard',
  };

  handleChangeName = (e: any) => {
    this.setState({name: e.target.value});
  };

  handleChangeCode = (e: any) => {
    this.setState({code: e.target.value.replaceAll(' ', '')});
  };

  handleChangeType = (e: any) => {
    this.setState({type: e.target.value});
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();

    const {
      code,
      name,
      type,
    } = this.state;

    await this.props.create({ code, name: name || haiku(), type })

    if (!this.props.error) {
      this.props.history.push("/boards/" + this.props.board.id)
    }
  };

  render() {
    const {
      name, type
    } = this.state
    return (
      <>
        {this.props.visible ? (
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
                      onClick={this.props.onCancel}
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="block w-6 h-6 bg-transparent outline-none opacity-5 focus:outline-none"
                      />
                    </button>
                  </div>

                  <div className="p-5 text-sm">
                    <form onSubmit={this.handleSubmit}>
                      <div className="mb-4">
                        <label className="inline-block mb-2 font-bold leading-relaxed">
                          Name of board
                        </label>
                        <input
                          className="block w-full px-3 py-3 leading-tight border border-gray-400 rounded-sm appearance-none focus:border-blue-500 focus:outline-none"
                          placeholder="My new board..."
                          maxLength={100}
                          onChange={this.handleChangeName}
                          value={name}
                        />
                      </div>

                      <div className="mb-4">
                        <label className="inline-block mb-2 font-bold leading-relaxed">
                          Board type
                        </label>
                        <div className="relative">
                          <select
                            className="block w-full px-2 py-3 leading-tight border border-gray-400 rounded-sm appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
                            onChange={this.handleChangeType}
                            value={type}
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

                      { this.props.error && (
                        <div className="mb-4 text-sm text-red-500">
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                              <span className="ml-1">{this.props.error}</span>
                          </div>
                      )}

                      <div className="flex items-center justify-center mt-5 text-sm">
                        <button
                          className="px-4 py-2 mb-1 mr-1 text-white bg-blue-500 rounded-full shadow outline-none active:bg-blue-400 hover:bg-blue-600"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Create Board
                        </button>
                        <button
                          className="px-4 py-2 mb-1 ml-1 bg-gray-300 rounded-full outline-none hover:bg-gray-400 active:bg-gray-200"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={this.props.onCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
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
}
