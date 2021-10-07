import types from '../types/types';

export const dataReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.saveNewData:
      console.log(actions.payload);  
      return [...state, actions.payload];

    default:
      return state;
  }
}