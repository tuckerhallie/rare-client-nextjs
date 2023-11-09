import clientCredentials from '../utils/data/client';

const endpoint = clientCredentials.databaseURL;

const getAllPosts = async () => {
  const response = await fetch(`${endpoint}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const posts = await response.json();
  return Object.values(posts);
};

const getSinglePost = async (id) => {
  const response = await fetch(`${endpoint}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const post = await response.json();
  return post;
};

export {
  getAllPosts,
  getSinglePost,
};
