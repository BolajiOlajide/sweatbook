import {
  FETCH_CURRENT_WORKOUT_COMPLETE,
  ADD_EXERCISE_COMPLETE
} from '../utils/constants';

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_WORKOUT_COMPLETE:
      return payload;

    case ADD_EXERCISE_COMPLETE:
      return [...state, payload];

    default:
      return state;
  }
};
