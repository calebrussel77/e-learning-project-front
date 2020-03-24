import React from 'react';
import HeaderNav from '../Navigation/HeaderNav/HeaderNav';
import CategoriesList from './CategoriesList/CategoriesList';

const Navigation = () => {
  return (
    <header>
      <HeaderNav />
      <CategoriesList />

      {/* <div>sidedrawer</div> */}
    </header>
  );
};

export default Navigation;
