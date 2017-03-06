import axios from 'axios';
export const TRIGGER_SEARCH = 'TRIGGER_SEARCH';

export function triggerSearch(query) {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));

    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => {
        dispatch(receivePosts(subreddit, response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(receiveApiError(error.response));
      });
  };
}