// import endpoint from '../utils/data/endpoint';

const getAllUsers = async () => {
  const response = await fetch('http://localhost:8000/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const users = await response.json();
  return Object.values(users);
};

const getSingleUser = async (id) => {
  const response = await fetch(`http://localhost:8000/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await response.json();
  return user;
};

export {
  getAllUsers,
  getSingleUser,
};
