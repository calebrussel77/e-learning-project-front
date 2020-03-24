import React from 'react';

const ExploreCourse = () => {
  return (
    <button className="flex justify-between items-center hover:bg-gray-300 bg-gray-100 rounded py-2 px-8">
      <div className="font-bold text-gray-900">Explorer</div>
      <div className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.505 15.819"
          className="fill-current stroke-current h-2 w-2"
        >
          <path
            id="Icon_feather-chevron-down"
            data-name="Icon feather-chevron-down"
            d="M10,15,20.4,26.8,30.8,15"
            transform="translate(-7.648 -12.647)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.333"
          />
        </svg>
      </div>
    </button>
  );
};

export default ExploreCourse;
