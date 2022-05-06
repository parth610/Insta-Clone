import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './posts';
import likeReducer from './likes';
import session from './session';
import UserProfileReducer from './userProfile';
import followsReducer from './follows';
import followingReducer from './following';
import commentReducer from './comments';
import searchReducer from './search';

const rootReducer = combineReducers({
  posts: postReducer,
  likes: likeReducer,
  comments: commentReducer,
  session,
  UserProfileReducer,
  followsReducer,
  followingReducer,
  search: searchReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
