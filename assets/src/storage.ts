const PREFIX = '__METABOARD__';

const get = (key: string) => {
  const result = localStorage.getItem(`${PREFIX}${key}`);

  if (!result) {
    return null;
  }

  try {
    return JSON.parse(result);
  } catch (e) {
    return result;
  }
};

const set = (key: string, value: any) => {
  localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
};

const remove = (key: string) => {
  localStorage.removeItem(`${PREFIX}${key}`);
};

export const getAuthTokens = () => get('__AUTH_TOKENS__');

export const setAuthTokens = (tokens: any) => set('__AUTH_TOKENS__', tokens);

export const removeAuthTokens = () => remove('__AUTH_TOKENS__');
