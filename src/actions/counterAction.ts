import { ICounterAction } from '../types/type';

export const increment = (): ICounterAction => ({
  type: 'INCREMENT',
});
export const decrement = (): ICounterAction => ({
  type: 'DECREMENT',
});
