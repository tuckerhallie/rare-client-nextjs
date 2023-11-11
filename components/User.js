import React from 'react';
import PropTypes from 'prop-types';

export default function User({ userObj }) {
  return (
    <div>
      <img src={userObj.profile_image_url} alt="userObj.username" />
      <h1>{userObj.first_name}</h1>
      <h1>{userObj.last_name}</h1>
      <p>{userObj.email}</p>
      <p>{userObj.bio}</p>
    </div>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    username: PropTypes.string,
    profile_image_url: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};
