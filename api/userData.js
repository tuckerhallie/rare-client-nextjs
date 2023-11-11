import clientCredentials from '../utils/data/client';

const endpoint = clientCredentials.databaseURL;

const getAllUsers = async () => {
  const response = await fetch(`${endpoint}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const users = await response.json();
  return Object.values(users);
};

const getSingleUser = async (id) => {
  const response = await fetch(`${endpoint}/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await response.json();
  return user;
};

const updateUser = async (payload) => {
  const response = await fetch(`${clientCredentials.databaseURL}/users/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const userUpdate = await response.json();
  return userUpdate;
};

export {
  getAllUsers,
  getSingleUser,
  updateUser,
};
