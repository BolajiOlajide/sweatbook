import { createAsyncCreator } from '../services/asyncCreators';
import * as api from '../services/api';
import {
  FETCH_CURRENT_WORKOUT,
  FETCH_CURRENT_WORKOUT_COMPLETE,
  ADD_EXERCISE,
  ADD_EXERCISE_COMPLETE
} from '../utils/constants';


export const fetchCurrentWorkout = () => (
  createAsyncCreator(
    FETCH_CURRENT_WORKOUT,
    FETCH_CURRENT_WORKOUT_COMPLETE,
    () => api.get('current_workout')
  )
);


export const addExerciseToCurrentWorkout = (exercise) => (
  createAsyncCreator(
    ADD_EXERCISE,
    ADD_EXERCISE_COMPLETE,
    () => api.post('current_workout', exercise)
  )
);
