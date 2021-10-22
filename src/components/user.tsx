import React, { useEffect } from 'react';
import userService from 'api/UserAPI';
import { useAppDispatch, useAppSelector } from 'global/store';
import { login } from 'actions/authAction';
import SkeletonProfile from './skeletonProfile';

const User: React.FC = () => {
  const { user: profile } = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!profile) {
      userService.getUserInfo(1)
        .then((user) => {
          if (user) {
            dispatch(login(user));
          }
        });
    }
  }, [profile]);

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
        <SkeletonProfile />
      )}
    </div>
  );
};

export default User;
