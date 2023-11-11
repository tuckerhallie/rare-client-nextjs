/*
import React, { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getSingleUser().then(setProfile);
  }, []);

  return (
    <div className="profile">
      {profile.map((user) => (
        <div>
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

export default Profile;
*/
