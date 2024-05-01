const TOKEN_KEY = "_TOKEN_";

export const readToken = () => {
  const token = localStorage.getItem(TOKEN_KEY) ?? "";
  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
