import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export function selectReddit(reddit) {

  console.log('selectReddit');
  return {
    type: SELECT_REDDIT,
    reddit,
  };
}

export function invalidateReddit(reddit) {
  console.log('invalidateReddit');
  return {
    type: INVALIDATE_REDDIT,
    reddit,
  };
}

function requestPosts(reddit) {
  console.log('requestPosts');
  return {
    type: REQUEST_POSTS,
    reddit,
  };
}

function receivePosts(reddit, json) {
  console.log('receivePosts');

  return {
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  };
}

function fetchPosts(reddit) {
  console.log('fetchPosts');


  return dispatch => {
    dispatch(requestPosts(reddit));

    console.log('dispatch fetch ');
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => {
        console.log('response----------------------:   '+response);
        return response.json()})
      .then(json => {
        console.log('json----------------------:   '+json);
        return dispatch(receivePosts(reddit, json))});
  };
}

function shouldFetchPosts(state, reddit) {
  console.log('shouldFetchPosts');

  console.log('state:');
  console.log(state);
  console.log('reddit:');
  console.log(reddit);

  const posts = state.postsByReddit[reddit];
  console.log('posts:');
  console.log(posts);
  if (!posts) {
    console.log('return true ');
    return true;
  }
  if (posts.isFetching) {

    console.log('return false ');
    return false;
  }

  console.log('posts.didInvalidate:');
  console.log(posts.didInvalidate);
  return posts.didInvalidate;
}

export function fetchPostsIfNeeded(reddit) {
  console.log('fetchPostsIfNeeded');


  return (dispatch, getState) => {

    if (shouldFetchPosts(getState(), reddit)) {

      console.log('before----------------------:   '+getState());
      return dispatch(fetchPosts(reddit));

    }
    return null;
  };
}
