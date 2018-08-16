import { combineReducers } from 'redux';

// reducers
import exerciseReducer from './exercise.reducer';
import categoryReducer from './category.reducer';
import workoutReducer from './workout.reducer';


const rootReducer = combineReducers({
  exercises: exerciseReducer,
  categories: categoryReducer,
  workout: workoutReducer
});

export default rootReducer;
