// constants
import { GET_EXERCISES, ADD_EXERCISE } from '../utils/constants';

// initialState
import { exercises } from '../store/initialState';


export default (state=exercises, action) => {
  switch (action.type) {
    case GET_EXERCISES:
    default:
      return state;
  }
};
