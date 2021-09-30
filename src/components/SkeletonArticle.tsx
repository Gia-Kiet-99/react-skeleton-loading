import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

const SkeletonArticle = () => (
  <div className="skeleton-wrapper">
    <div className="skeleton-article">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
    <Shimmer />
  </div>
);

export default SkeletonArticle;
