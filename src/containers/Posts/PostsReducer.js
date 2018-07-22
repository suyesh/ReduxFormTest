import { mapKeys, omit } from 'lodash'

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from './PostsConstants'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return(mapKeys(action.payload.data, 'id'));
    case FETCH_POST:
      return { ...state,[action.payload.data.id]: action.payload.data}
    case DELETE_POST:
      return omit(state, action.payload)
    default:
     return state;
  }
}
