import React from "react";
import SearchIcon from "../../assets/svg/search-icon/SearchIcon";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <div className="relative mr-6 my-2">
        <input
          type="search"
          className="bg-gray-200 rounded-lg pl-10 px-32 text-gray-700 focus:outline-none py-2 placeholder-gray-500 text-sm border border-gray-200 focus:bg-white focus:border-green-500 focus:text-gray-700"
          placeholder="Search by name..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
            <button className='focus:outline-none ml-2' type="submit">
                <SearchIcon/>
            </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
