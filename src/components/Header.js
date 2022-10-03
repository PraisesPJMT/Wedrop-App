import React from 'react';
import { faCloudSunRain, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const logoName = 'wedrop'
  return (
    <header className="py-2 px-4 bg-steel-blue flex item-center justify-between">
      <div className="flex items-center gap-1 text-white">
        <FontAwesomeIcon
          className="text-xl"
          icon={faCloudSunRain}
        />
        <span className="capitalize text-xm font-bold">{ logoName }</span>
      </div>
    </header>
  );
};

export default Header;