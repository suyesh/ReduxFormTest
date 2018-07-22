import { mapKeys } from 'lodash'

import { FETCH_POSTS } from './PostsConstants'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id')
    default:
     return state;
  }
}
