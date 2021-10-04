import React from 'react';
import SkeletonElement from './skeletonElement';
import Shimmer from './shimmer';

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
