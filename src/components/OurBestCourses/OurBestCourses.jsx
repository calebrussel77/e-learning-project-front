import React from 'react';
import BestTopicCourses from './BestTopicCourses/BestTopicCourses';
import BestCourses from './BestCourses/BestCourses';

const OurBestCourses = () => {
  return (
    <div className="max-w-full">
      <h1 className="text-gray-900 font-bold text-2xl">NOS MEILLEURS COURS</h1>
      <div className="mt-16">
        <BestTopicCourses />
      </div>
      <div className="mb-4">
        <BestCourses />
      </div>
      <button className="px-16 py-2 bg-white border border-gray-500 text-green-700 font-bold text-xl rounded-md block m-0 m-auto shadow hover:bg-green-400 hover:text-white">
        Tous les cours
      </button>
    </div>
  );
};

export default OurBestCourses;
