// Profile.js

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllUsers } from '../api/userData';

function Profile({ token }) {
  const [users, setUsers] = useState([]);

  const getTheUsers = () => {
    getAllUsers(token).then(setUsers);
  };

  useEffect(() => {
    getTheUsers(token);
  }, [token]);

  return (
    <div className="profile">
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.profile_image_url} alt={user.first_name} style={{ width: '100px' }} />
          <h3>Name: {user.first_name} {user.last_name}</h3>
          <br />
          <h3>Email: {user.email}</h3>
          <h3>Bio: {user.bio}</h3>
          <h3>Username: {user.username}</h3>
          <h3>Active Since: {user.created_on}</h3>
        </div>
      ))}
    </div>
  );
}

Profile.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Profile;
