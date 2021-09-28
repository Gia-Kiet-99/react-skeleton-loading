import React from 'react';
import './skeleton.css';

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
