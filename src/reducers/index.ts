import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  articles: articleReducer,
});

export default rootReducer;
