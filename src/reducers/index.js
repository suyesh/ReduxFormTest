import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from '../containers/Posts/PostsReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
})

export default rootReducer
