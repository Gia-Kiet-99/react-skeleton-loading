import React from 'react';
import './skeleton.scss';

interface IProps {
  type: string;
}

const SkeletonElement = ({ type }: IProps) => {
  const classes = `skeleton ${type}`;
  return (
    <div className={classes} />
  );
};

export default SkeletonElement;
