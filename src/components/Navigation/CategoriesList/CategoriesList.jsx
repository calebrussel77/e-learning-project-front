import React from 'react';
import ChevronDown from '../../../assets/svg/chevron-down/ChevronDown';

const CategoriesList = () => {
  return (
    <div className="flex opacity-50 shadow-md items-center justify-center border border-gray-400 py-2 bg-white w-full">
      <div className="flex justify-between items-center ml-16">
        <a href="graf.fr" className="font-bold block text-gray-900 sm:text-sm">
          Physics
        </a>
        <div className="ml-2">
          <ChevronDown />
        </div>
      </div>
        <div className="flex justify-between items-center ml-16">
            <a href="graf.fr" className="font-bold block text-gray-900 sm:text-sm">
                Environnement
            </a>
            <div className="ml-2">
                <ChevronDown />
            </div>
        </div>
      <div className="flex justify-between items-center sm:text-sm ml-16">
        <a href="graf.fr" className="font-bold block text-gray-900">
          Developement
        </a>
        <div className="ml-2">
          <ChevronDown />
        </div>
      </div>
      <div className="flex justify-between items-center sm:text-sm ml-16">
        <a href="graf.fr" className="font-bold block text-gray-900">
          Arts & Culture
        </a>
        <div className="ml-2">
          <ChevronDown />
        </div>
      </div>
      <div className="flex justify-between items-center sm:text-sm ml-16">
        <div>
          <a href="graf.fr" className="font-bold block text-gray-900">
            Photography
          </a>
        </div>
        <div className="ml-2">
          <ChevronDown />
        </div>
      </div>
      <div className="flex justify-between items-center sm:text-sm ml-16">
        <a href="graf.fr" className="font-bold block text-gray-900">
          Branding
        </a>
        <div className="ml-2">
          <ChevronDown />
        </div>
      </div>
      <div className="flex justify-between items-center sm:text-sm ml-16">
        <a href="graf.fr" className="font-bold block text-gray-900">
          Certification
        </a>
        <div className="ml-2">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
