import React from 'react';
import {Channel, Socket} from 'phoenix';
import {throttle} from 'lodash';

import BoardDisplay from './BoardDisplay';
import Loading from '../common/Loading';
import {Board} from '../../types';
import {SOCKET_URL} from '../../socket';
import logger from '../../logger';
import * as API from '../../api';

import {RouteComponentProps} from 'react-router-dom';

type Props = RouteComponentProps<{code: string}>;
type State = {
  loading: boolean;
  board: Board | null;
};

export default class BoardSharing extends React.Component<Props, State> {
  state: State = {
    loading: true,
    board: null,
  };

  socket: Socket | null = null;
  channel: Channel | null = null;

  async componentDidMount() {
    const boardCode = this.props.match.params.code;
    this.joinBoardChannel(boardCode);
  }

  componentWillUnmount() {
    this.channel?.leave();
    this.socket?.disconnect();
  }

  joinBoardChannel(boardCode: string) {
    if (this.socket && this.socket.disconnect) {
      logger.debug('Existing socket:', this.socket);
      this.socket.disconnect();
    }

    this.socket = new Socket(SOCKET_URL, {
      params: {token: API.getAccessToken()},
    });
    this.socket.connect();

    this.socket.onError(
      throttle(
        () =>
          logger.error('Error connecting to socket. Try refreshing the page.'),
        30 * 1000 // throttle every 30 secs
      )
    );

    if (this.channel && this.channel.leave) {
      logger.debug('Existing channel:', this.channel);
      this.channel.leave();
    }

    this.channel = this.socket.channel(`board:${boardCode}`);

    this.channel.on('shout', (board: Board) => {
      this.handleNewUpdate(board);
    });

    this.channel
      .join()
      .receive('ok', (res: any) => {
        logger.debug('Joined channel successfully', res);
      })
      .receive('error', (err: any) => {
        logger.error('Unable to join', err);
        if (err.code === 404) {
          this.props.history.push('/404');
        } else {
          setTimeout(() => this.joinBoardChannel(boardCode), 10000);
        }
      });
  }

  handleNewUpdate(board: Board) {
    this.setState({board, loading: false});
  }

  render() {
    const {loading, board} = this.state;
    return <>{loading ? <Loading /> : board && <BoardDisplay {...board} />}</>;
  }
}
