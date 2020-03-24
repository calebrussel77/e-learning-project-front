import React from "react";
import BestTopicFormation from "./BestTopicFormation/BestTopicFormation";

const BestTopicFormations = () => {
  return (
      <div className="main-carousel my-10 max-w-4xl mx-auto" data-flickity='{ "cellAlign": "left", "contain": true }'>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicFormation /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicFormation /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicFormation /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicFormation /></a>
          <a className="block carousel-cell h-24 w-1/2" href='#'><BestTopicFormation /></a>
      </div>
  );
};

export default BestTopicFormations;
