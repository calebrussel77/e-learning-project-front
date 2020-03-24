import React from 'react';
import Course from './Course/Course';

const Courses = () => {
  return (
    <div className="flex items-stretch flex-wrap justify-around ">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default Courses;
