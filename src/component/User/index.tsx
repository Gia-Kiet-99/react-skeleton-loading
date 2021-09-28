import React, { useEffect, useState } from 'react';
import { UserType } from 'types/type';
import userService from '../../service/user.service';

const User: React.FC = () => {
  const [profile, setProfile] = useState<UserType | null>(null);

  useEffect(() => {
    setTimeout(async () => {
      userService.getUserInfo()
        .then((user) => {
          if (user) {
            setProfile(user);
          }
        });
    }, 3000);
  });

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
    </div>
  );
};

export default User;
