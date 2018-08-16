// constants
import { SET_MODAL_VISIBILITY } from '../utils/constants';

// initialState
import { modalVisibility } from '../store/initialState';


export default (state=modalVisibility, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        displayModal: payload
      };

    default:
      return state;
  }
};
