import clientCredentials from '../utils/data/client';

const endpoint = clientCredentials.databaseURL;

const getAllComments = async () => {
  const response = await fetch(`${endpoint}/comments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const comments = await response.json();
  return Object.values(comments);
};

const getSingleComment = async (id) => {
  const response = await fetch(`${endpoint}/comments/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const comment = await response.json();
  return comment;
};

export {
  getAllComments,
  getSingleComment,
};
