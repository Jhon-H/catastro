import types from '../types/types';

export const saveNewData = newData  => {
  return {
    type: types.saveNewData,
    payload: newData
  }
}