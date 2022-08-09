export const getPosts = posts => ({
  type: 'GET_POSTS',
  payload: posts,
});

export const getPostDetail = detail => ({
  type: 'GET_POST_DETAIL',
  payload: detail,
});
