import React from "react";
import BestTopicCourse from "./BestTopicCourse/BestTopicCourse";

const BestTopicCourses = () => {
  return (
      <div className="main-carousel my-10 max-w-4xl mx-auto" data-flickity='{ "cellAlign": "left", "contain": true }'>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicCourse /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicCourse /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicCourse /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicCourse /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicCourse /></a>
      </div>
  );
};

export default BestTopicCourses;
