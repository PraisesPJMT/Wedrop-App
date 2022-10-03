import React, { useState } from 'react';
import {
  faCloudSunRain, faMagnifyingGlassLocation, faBars, faClose
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [menuOpen, setMenu] = useState(false);
  const logoName = 'wedrop';

  const handleMobileMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header className="py-2 px-4 bg-steel-blue flex item-center justify-between">
      <div className="w-[20px] flex items-center">
        <button
          className="flex item-center"
          type="button"
          onClick={handleMobileMenu}
        >
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={menuOpen ? faClose : faBars}
          />
        </button>
      </div>
      <div className="flex items-center gap-1 text-white">
        <FontAwesomeIcon
          className="text-xl"
          icon={faCloudSunRain}
        />
        <span className="capitalize text-xm font-bold">{ logoName }</span>
      </div>
      <div className="input-group relative flex w-2/5 flex-wrap items-stretch shadow-md">
        <input type="search"
               className="form-control relative flex-auto w-4/5 block px-1 py-0.1 text-steel-blue text-bold text-xs font-normal bg-white bg-clip-padding border-white border-2 rounded-l-full transition ease-in-out focus:text-steel-blue focus:bg-white focus:border-white focus:outline-none"
               placeholder="Search City..." aria-label="Search" aria-describedby="button-addon2"/>
        <button
          className="btn inline-block bg-steel-blue w-1/5 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md border-white border-2 hover:shadow-lg focus:bg-steel-blue  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          type="button" id="button-addon2">
          <FontAwesomeIcon
            className="text-xs hover:scale-125 px-1.5 py-1.5"
            icon={faMagnifyingGlassLocation} />
        </button>
      </div>
    </header>
  );
};

export default Header;