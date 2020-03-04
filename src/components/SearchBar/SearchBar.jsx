import React from 'react';
import SearchIcon from '../../assets/svg/search-icon/SearchIcon';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form>
      <input
        className="relative bg-gray-200 rounded-lg w-full px-40 text-gray-700 focus:outline-none py-1 placeholder-gray-500 text-lg border border-gray-200 focus:bg-white focus:border-gray-800 focus:text-gray-700"
        type="text"
        placeholder="Search everything here"
      />
      <button
        className="btnSearch absolute bg-transparent cursor-pointer mt-2 lg:mt-1"
        type="submit"
        title="search"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
