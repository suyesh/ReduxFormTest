import axios from 'axios';
import { FETCH_POSTS, ROOT_URL, API_KEY } from './PostsConstants';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}