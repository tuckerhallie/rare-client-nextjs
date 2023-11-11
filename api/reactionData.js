import clientCredentials from '../utils/data/client';

const endpoint = clientCredentials.databaseURL;

const getAllReactions = async () => {
  const response = await fetch(`${endpoint}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const reactions = await response.json();
  return Object.values(reactions);
};

const getSingleReaction = async (id) => {
  const response = await fetch(`${endpoint}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const reaction = await response.json();
  return reaction;
};

export {
  getAllReactions,
  getSingleReaction,
};
