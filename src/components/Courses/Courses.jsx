import React from 'react';
import Course from './Course/Course';

const Courses = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default Courses;
