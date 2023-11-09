import clientCredentials from '../utils/data/client';

const endpoint = clientCredentials.databaseURL;

// const getAllPosts = async () => {
//   const response = await fetch(`${endpoint}/posts`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const posts = await response.json();
//   return Object.values(posts);
// };

// const getSinglePost = async (id) => {
//   const response = await fetch(`${endpoint}/posts/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const post = await response.json();
//   return post;
// };

const getAllPosts = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/posts.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSinglePost = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAllPosts,
  getSinglePost,
};
