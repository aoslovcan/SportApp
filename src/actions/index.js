import axios from "axios";

export const FETCH_ERROR = "FETCH_ERROR";

export const FETCH_FEED_SUCCESS = "FETCH_FEED_SUCCESS";
export const FETCH_FEED_STARTED = "FETCH_FEED_STARTED";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";

export const fetchFeedSuccess = (feed) => {
  return {
    type: FETCH_FEED_SUCCESS,
    payload: {
      feed,
    },
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      posts,
    },
  };
};

const fetchPostsStarted = () => {
  return {
    type: FETCH_POSTS_STARTED,
    payload: {
      isLoading: true,
    },
  };
};

const fetchFeedStarted = () => {
  return {
    type: FETCH_FEED_STARTED,
    payload: {
      isLoading: true,
    },
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchFeed = () => {
  return (dispatch) => {
    dispatch(fetchFeedStarted());

    axios
      .get("http://localhost:3001/feed")
      .then((res) => {
        dispatch(fetchFeedSuccess(JSON.parse(res.data)));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};

export const fetchPosts = (data) => {
  return (dispatch) => {
    dispatch(fetchPostsStarted());

    axios
      .get("http://localhost:3001/posts/" + data + "")
      .then((res) => {
        dispatch(fetchPostsSuccess(JSON.parse(res.data)));
      })
      .catch((err) => {
        dispatch(fetchError(err.message));
      });
  };
};
