import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import articleReducer from './articleReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  articles: articleReducer,
  authentication: authReducer,
});

export default rootReducer;
