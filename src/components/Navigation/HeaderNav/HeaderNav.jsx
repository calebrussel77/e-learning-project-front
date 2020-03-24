import React from 'react';
import Logo from '../../../assets/svg/logo/Logo';
import ExploreCourse from '../../ExploreCourse/ExploreCourse';
import SearchBar from '../../SearchBar/SearchBar';
import Btn from '../../UI/Button/Btn';
import Languages from '../../Languages/Languages';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-16 bg-white border">
      <div className="ml-16">
        <Logo />
      </div>
      <div className='ml-8'>
        <ExploreCourse />
      </div>
      <div className="ml-8">
        <Languages />
      </div>
      <div className="ml-8">
        <SearchBar />
      </div>
      <div className="ml-8">
        <Btn>S'enregistrer</Btn>
      </div>
      <button className="ml-8 bg-green-700 px-12 rounded-md py-1 hover:bg-green-800">
        <a href="#" className="font-semibold text-lg text-white">
          Login
        </a>
      </button>
    </div>
  );
};

export default Navbar;
