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

const createComment = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newComment = await response.json();
  return newComment;
};

const updateComment = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/comments/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const commentUpdate = await response.json();
  return commentUpdate;
};

const deleteComment = async (id) => {
  const response = await fetch(`${clientCredentials.databaseURL}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const commentDelete = await response.json();
  return commentDelete;
};

export {
  getAllComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment,
};
