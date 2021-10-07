import types from '../types/types';
// return [...state, actions.payload];

export const dataReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.saveNewData:
      return [...state, actions.payload];

    default:
      return state;
  }
}