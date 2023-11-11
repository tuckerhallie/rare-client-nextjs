import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleUser } from '../api/userData';

function Profile({ token }) {
  const [profile, setProfile] = useState({});

  const getTheSingleUser = () => {
    getSingleUser(token).then(setProfile);
  };

  useEffect(() => {
    getTheSingleUser(token);
  }, []);

  return (
    <div className="profile">
      <div>
        <img src={profile?.profile_image_url} alt={profile?.first_name} style={{ width: '100px' }} />
        <h3>Name: {profile?.first_name} {profile?.last_name}</h3>
        <br />
        <h3>Email: {profile?.email}</h3>
        <h3>Bio: {profile?.bio}</h3>
        <h3>Username: {profile?.username}</h3>
        <h3>Active Since: {profile?.created_on}</h3>
      </div>
    </div>
  );
}

Profile.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Profile;
