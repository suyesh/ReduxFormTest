import axios from 'axios';
import { FETCH_POSTS, ROOT_URL, API_KEY, CREATE_POST, FETCH_POST, DELETE_POST } from './PostsConstants';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
                       .then(() => callback())
  return {
    type: CREATE_POST,
    payload: request
  }
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}

export const deletePost = (id, callback) => {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
                       .then(() => callback())
  return {
    type: DELETE_POST,
    payload: id
  }
}
