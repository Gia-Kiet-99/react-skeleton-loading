import { ICounterAction } from 'types';

export const increment = (): ICounterAction => ({
  type: 'INCREMENT',
});
export const decrement = (): ICounterAction => ({
  type: 'DECREMENT',
});
