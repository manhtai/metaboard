import request from 'superagent';
import {getAuthTokens} from './storage';
import {User} from './types';


export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = LoginParams;

export type ResetPasswordParams = {
  password: string;
  passwordConfirmation: string;
};

export const getAccessToken = (): string | null => {
  const tokens = getAuthTokens();

  return (tokens && tokens.token) || null;
};

export const getRefreshToken = (): string | null => {
  const tokens = getAuthTokens();

  return (tokens && tokens.renew_token) || null;
};

export const register = async ({
  email,
  password,
}: RegisterParams) => {
  return request
    .post(`/api/registration`)
    .send({
      user: {
        email,
        password,
        password_confirmation: password,
      },
    })
    .then((res) => res.body.data);
}


export const login = async ({email, password}: LoginParams) => {
  return request
    .post(`/api/session`)
    .send({user: {email, password}})
    .then((res) => res.body.data);
};


export const me = async (token = getAccessToken()): Promise<User> => {
  if (!token) {
    throw new Error('Invalid token!');
  }

  return request
    .get(`/api/me`)
    .set('Authorization', token)
    .then((res) => res.body.data);
};


export const renew = async (token = getRefreshToken()) => {
  if (!token) {
    throw new Error('Invalid token!');
  }

  return request
    .post(`/api/session/renew`)
    .set('Authorization', token)
    .then((res) => res.body.data);
};


export const logout = async () => {
  return request.delete(`/api/session`).then((res) => res.body);
};


export const fetchAllBoards = async (
  token = getAccessToken()
) => {
  if (!token) {
    throw new Error('Invalid token!');
  }

  return request
    .get(`/api/boards`)
    .set('Authorization', token)
    .then((res) => res.body.data);
}


export const fetchBoardById = async (
  id: string,
  token = getAccessToken()
) => {
  if (!token) {
    throw new Error('Invalid token!');
  }

  return request
    .get(`/api/boards/${id}`)
    .set('Authorization', token)
    .then((res) => res.body.data);
}

export const createBoard = async (
  data: any,
  token = getAccessToken()
) => {
  if (!token) {
    throw new Error('Invalid token!');
  }

  return request
    .post('/api/boards')
    .set('Authorization', token)
    .send(data)
    .then((res) => res.body.data);
}

export const updateBoard = async (
  id: string,
  updates: any,
  token = getAccessToken()
) => {
  if (!token) {
    throw new Error('Invalid token!');
  }

  return request
    .put(`/api/boards/${id}`)
    .set('Authorization', token)
    .send(updates)
    .then((res) => res.body.data);
}
