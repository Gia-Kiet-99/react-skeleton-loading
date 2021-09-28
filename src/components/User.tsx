import React, { useEffect, useState } from 'react';
import { IUser } from 'types/type';
import userService from '../service/user';
import SkeletonProfile from './SkeletonProfile';

const User: React.FC = () => {
  const [profile, setProfile] = useState<IUser | null>(null);

  useEffect(() => {
    userService.getUserInfo()
      .then((user) => {
        if (user) {
          setProfile(user);
        }
      });
  }, []);

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

      {!profile && (
        <SkeletonProfile/>
      )}
    </div>
  );
};

export default User;
