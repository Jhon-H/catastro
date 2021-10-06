import { dataReducer } from './reducers/reducers';
import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({ dataReducer});
const store = createStore(
  reducers
);

export default store;