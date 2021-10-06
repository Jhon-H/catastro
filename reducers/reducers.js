import types from '../types/types';

export const dataReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.saveNewData:
      return [...actions.payload];

    default:
      return state;
  }
}