import React from 'react';
import FeedBack from './FeedBack/FeedBack';
import './Feedbacks.css';

const FeedBacks = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-gray-900 font-bold tracking-wide text-2xl my-4">
        FEEDBACK
        <br />
        <span className="inline-block border-2 bg-green-700 border-green-700 w-40"></span>
      </h2>
      <p className="text-center text-gray-700 font-bold text-lg">
        Ce que d'autres étudiants pensent de nous , après avoir appris avec nous
        et atteint leurs objectifs
      </p>
          <div className="main-carousel my-10 max-w-6xl mx-auto" data-flickity='{ "cellAlign": "left", "contain": true }'>
              <div className="carousel-cell"><FeedBack /></div>
              <div className="carousel-cell"><FeedBack /></div>
              <div className="carousel-cell"><FeedBack /></div>
              <div className="carousel-cell"><FeedBack /></div>
              <div className="carousel-cell"><FeedBack /></div>
          </div>
    </div>
  );
};

export default FeedBacks;
