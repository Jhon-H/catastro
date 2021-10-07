import types from '../types/types';

export const dataReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.saveNewData:
      console.log("ENTRA DONDE ES------------------");  
      console.log(actions.payload);  
      console.log("---------------------------------");
      return [...actions.payload];

    default:
      return state;
  }
}