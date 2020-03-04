import React from 'react';
import Logo from '../../../assets/svg/logo/Logo';
import ExploreCourse from '../../ExploreCourse/ExploreCourse';
import SearchBar from '../../SearchBar/SearchBar';
import Btn from '../../UI/Button/Btn';
import Languages from '../../Languages/Languages';

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-16 bg-white">
      <div>
        <Logo />
      </div>
      <div>
        <ExploreCourse />
      </div>
      <div>
        <Languages />
      </div>
      <div className="hidden md:block lg:block xl:block">
        <SearchBar />
      </div>
      <div className="hidden lg:block md:block xl:block">
        <Btn>S'enregistrer</Btn>
      </div>
      <button className="mr-8 bg-green-700 px-16 rounded-md py-1 hover:bg-green-800 sm:display-none">
        <a href="grafikert.fr" className="font-semibold text-lg text-white">
          Login
        </a>
      </button>
    </div>
  );
};

export default Navbar;
