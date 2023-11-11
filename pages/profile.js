import React, { useEffect, useState } from 'react';
import { getSingleUser } from '../api/userData';

function Profile() {
  const [profile, setProfile] = useState({});

  const getTheSingleUser = () => {
    getSingleUser(profile.id).then(setProfile);
  };

  useEffect(() => {
    getTheSingleUser(profile.id);
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

export default Profile;
