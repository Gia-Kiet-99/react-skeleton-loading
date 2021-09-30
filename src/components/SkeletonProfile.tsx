import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

const SkeletonProfile = () => (
  <div className="skeleton-wrapper">
    <div className="skeleton-profile">
      <div>
        <SkeletonElement type="avatar" />
      </div>
      <div>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
    <Shimmer />
  </div>
);

export default SkeletonProfile;
