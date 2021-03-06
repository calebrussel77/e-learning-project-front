import React from 'react';
import Banner from '../../components/Banner/Banner';
import PresentationSection from '../../components/PresentationSection/PresentationSection';
import OurBestCourses from '../../components/OurBestCourses/OurBestCourses';
import OurBestFormations from '../../components/OurBestFormations/OurBestFormations';
import FeedBacks from '../../components/FeedBacks/FeedBacks';
import Layouts from '../../layouts/Layouts';
import Partners from '../../components/Partners/Partners';
import './Home.css';

const Home = () => {
  return (
    <Layouts>
      <main className="mx-auto pl-32 pr-32">
        <Banner />
        <div className="mb-16">
          <PresentationSection />
        </div>
        <div className="">
          <OurBestCourses />
        </div>
          <div className="border-2 border-gray-200 m-0 m-auto w-full bg-gray-200 mt-16"></div>

        <div className="mt-16 max-w-full">
          <OurBestFormations />
        </div>
        <div className="">
          <FeedBacks />
        </div>
      </main>
      <div className="my-16 w-full">
        <Partners />
      </div>
    </Layouts>
  );
};

export default Home;
