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

const createPost = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newPost = await response.json();
  return newPost;
};

const updatePost = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/posts/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const postUpdate = await response.json();
  return postUpdate;
};

const deletePost = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const postDelete = await response.json();
  return postDelete;
};

export {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
