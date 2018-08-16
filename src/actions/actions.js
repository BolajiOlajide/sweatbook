import { createAction } from 'redux-actions';
import { SET_EXECERCISE_VISIBILITY } from '../utils/constants';

export const setExerciseModalVisibility = (visible) => (
  createAction(SET_EXECERCISE_VISIBILITY)(visible)
);
