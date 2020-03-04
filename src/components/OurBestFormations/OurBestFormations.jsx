import React from 'react';
import BestTopicFormations from './BestTopicFormations/BestTopicFormations';
import BestFormations from './BestFormations/BestFormations';

const OurBestFormations = () => {
  return (
    <div className="max-w-full">
      <h1 className="text-gray-900 font-bold text-2xl">
        NOS MEILLEURES FORMATIONS
      </h1>
      <div className="mt-12">
        <BestTopicFormations />
      </div>
      <div className="my-4">
        <BestFormations />
      </div>
      <button className="px-16 py-2 bg-white border border-gray-500 text-green-700 font-bold text-xl rounded-md block m-0 m-auto shadow hover:bg-green-400 hover:text-white">
        Toutes les Formations
      </button>
    </div>
  );
};

export default OurBestFormations;
