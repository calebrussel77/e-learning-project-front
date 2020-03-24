import React from 'react';
import BooksImg from '../../../assets/images/books.jpg';

const Course = () => {
  return (
    <div className="shadow-lg rounded-md overflow-hidden max-w-xss max-h-lg border-gray-500 my-4 mx-2">
     <img alt='image-course' src={BooksImg} />
      <span className="inline-block text-indigo-300 ml-2 mt-2 font-semibold text-xs">
        By Caleb Russel
      </span>
      <h3 className="text-gray-800 font-bold ml-2 text-lg">
        Developpement Mobile Android
      </h3>
      <p className="text-gray-600 ml-2 my-2 text-sm">
        Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux
        whisky au juge blond qui fume….
      </p>
      <a
        href="#"
        className="text-green-700 font-medium block ml-2 font-semibold"
      >
        Lire la suite
        <svg
          fill="none"
          viewBox="0 0 24 24"
          className="fill-current stroke-current w-8 h-8 text-green-700 inline mx-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
      <div className="flex ml-2 my-2">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current h-4 w-20"
            viewBox="0 0 219.005 29.784"
          >
            <g transform="translate(-156.9 -2170.939)">
              <path
                d="M33.794-2.662,23.365,3.247,27.457,12.9,16.9,6.919,6.336,12.9l4.092-9.654L0-2.662H12.937L16.9-12l3.96,9.338Z"
                transform="translate(156.9 2185.5)"
                fill="#6c63ff"
                opacity="0.84"
              />
              <path
                d="M33.794-2.662,23.365,3.247,27.457,12.9,16.9,6.919,6.336,12.9l4.092-9.654L0-2.662H12.937L16.9-12l3.96,9.338Z"
                transform="translate(202.255 2186.389)"
                fill="#6c63ff"
                opacity="0.84"
              />
              <path
                d="M33.794-2.662,23.365,3.247,27.457,12.9,16.9,6.919,6.336,12.9l4.092-9.654L0-2.662H12.937L16.9-12l3.96,9.338Z"
                transform="translate(247.609 2185.5)"
                fill="#6c63ff"
                opacity="0.84"
              />
              <path
                d="M33.794-2.662,23.365,3.247,27.457,12.9,16.9,6.919,6.336,12.9l4.092-9.654L0-2.662H12.937L16.9-12l3.96,9.338Z"
                transform="translate(292.964 2185.5)"
                fill="#9297ab"
                stroke="#9297ab"
                stroke-width="2"
                opacity="0.84"
              />
              <path
                d="M33.794-2.662,23.365,3.247,27.457,12.9,16.9,6.919,6.336,12.9l4.092-9.654L0-2.662H12.937L16.9-12l3.96,9.338Z"
                transform="translate(338.318 2185.5)"
                fill="#9297ab"
                stroke="#9297ab"
                stroke-width="2"
                opacity="0.89"
              />
            </g>
          </svg>
        </div>
        <div className="ml-32">
          <a href="fr.fr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current stroke-current h-4 w-20"
              viewBox="0 0 33 33"
            >
              <path
                d="M29.713,9.971a6.722,6.722,0,0,0-10.421,0L17.871,11.6l-1.42-1.628a6.723,6.723,0,0,0-10.421,0,9.347,9.347,0,0,0,0,11.948l1.42,1.628L17.871,35.5,28.293,23.547l1.42-1.628A9.345,9.345,0,0,0,29.713,9.971Z"
                transform="translate(-1.372 -4.995)"
                fill="none"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
