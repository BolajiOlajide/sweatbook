// constants
import { GET_CATEGORIES, ADD_CATEGORY } from '../utils/constants';

// initialState
import { categories } from '../store/initialState';


export default (state=categories, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
    default:
      return state;

    case ADD_CATEGORY:
      return [
        action.payload,
        ...state
      ];
  }
};
