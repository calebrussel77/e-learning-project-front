import React from 'react';
import BannerIcon from '../../assets/svg/bannerIcon/BannerIcon';

const Banner = () => {
  return (
    <div className="flex mt-16">
      <div className="items-baseline pl-16 w-1/2">
        <h1 className="text-gray-900 font-bold tracking-tighter text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-gray-700 my-3 font-semibold text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque
          nobis vitae odit deleniti iusto repellat, fugit consectetur maxime.
          Rerum repellat rem reprehenderit numquam sit dolorum obcaecati. Nobis,
          distinctio delectus?
        </p>
        <button className="text-white shadow-lg font-bold rounded-md my-10 bg-green-700 px-10 py-3 text-lg hover:bg-green-800">
          Commencez içi
        </button>
      </div>
      <div className="items-baseline mt-4 pr-16 ml-0 w-1/2">
        <BannerIcon />
      </div>
    </div>
  );
};

export default Banner;
