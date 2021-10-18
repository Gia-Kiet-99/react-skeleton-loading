import { IUser } from 'types';

const LOGGED = 'LOGGED';

export const login = (user: IUser) => ({
  type: LOGGED,
  payload: user,
});
