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
  // const response = await fetch(`${clientCredentials.databaseURL}/posts`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(payload),
  // });
  // const newPost = await response.json();
  // return newPost;
  const response = await fetch(`${clientCredentials.databaseURL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export {
  getAllPosts,
  getSinglePost,
  createPost,
};
