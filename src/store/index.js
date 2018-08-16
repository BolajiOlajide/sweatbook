import { createStore } from 'redux';

// reducers
import reducers from '../reducers';

// initialState
import initialState from './initialState';


export default createStore(reducers, initialState);
