import React from 'react';

const FeedBack = () => {
  return (
    <div className="rounded-lg shadow-md h-40 max-w-sm border-2 bg-green-100">
      <div className="">
        <p className="text-gray-600 p-4">
          j'aime beaucoup cette plateforme elle m'a permis de mieux comprendre
          des trucs
        </p>
        <div className="flex items-center p-2">
          <div className="ml-4 rounded-full h-10 w-10 border-2 bg-gray-200"></div>
          <p className="ml-4 text-gray-900 font-bold ">james brandon</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
