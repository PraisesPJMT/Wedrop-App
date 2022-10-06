import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudSunRain, faMagnifyingGlassLocation, faBars, faClose,
} from '@fortawesome/free-solid-svg-icons';
import { allStatus, allWeather, getWeather } from '../redux/weather/weather';
import api from '../redux/api/api';

const Header = () => {
  const [menuOpen, setMenu] = useState(false);
  const status = useSelector(allStatus);
  const weather = useSelector(allWeather);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navs = [
    { name: 'Home', id: 1, path: '/' },
    { name: 'Contact', id: 2, path: '/contact' },
  ];

  const handleMobileMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setMenu(() => false);
  };

  const navigateToCity = () => {
    closeMobileMenu();
    const search = document.querySelector('input[name="search"]');
    if (search.value.length > 2) {
      dispatch(getWeather(search.value));
      if (status === 'succeeded') {
        const { ContinentName, CountryName } = api.getContinentCountryName(weather.countryCode);
        navigate(`/${ContinentName.toLowerCase().replace(/ /g, '-').replace(/'/g, '')}/${CountryName.toLowerCase().replace(/ /g, '-')}/${weather.cityName.toLowerCase().replace(/ /g, '-')}`);
        search.value = '';
      }
    }
  };

  return (
    <header className="py-2 px-4 bg-steel-blue flex item-center justify-between z-[100]">
      <div className="w-[20px] flex items-center md:hidden z-[100]">
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
      <Link className="flex items-center gap-1 text-white hover:scale-110 z-[100]" to="/" onClick={closeMobileMenu}>
        <FontAwesomeIcon
          className="text-xl md:text-2xl"
          icon={faCloudSunRain}
        />
        <span className="capitalize text-xm md:text-xl font-bold">wedrop</span>
      </Link>
      <nav className={`pb-6 flex flex-col gap-6 bg-steel-blue z-[10] absolute left-0 w-full h-screen transition-all duration-500 ease-in-out md:order-last md:flex-row md:items-center md:pb-0 md:static md:z-auto md:w-auto md:h-auto md:pt-0 md:pl-9 ${menuOpen ? 'top-0 pt-16' : 'top-[-890px] pt-auto'}`}>
        { navs.map((nav) => (
          <NavLink
            className="text-white font-bold text-xl px-6 w-full md:w-auto md:px-1.5 md:mx-1 active:border-b-2 active:border-b-white md:hover:scale-110"
            key={nav.path}
            to={nav.path}
            onClick={closeMobileMenu}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
      <div className="input-group relative flex w-2/5 flex-wrap items-stretch shadow-md z-[100]">
        <input
          type="search"
          name="search"
          className="form-control relative flex-auto w-4/5 block px-1 py-0.1 text-steel-blue text-bold text-xs font-normal bg-white bg-clip-padding border-white border-2 rounded-l-full transition ease-in-out focus:text-steel-blue focus:bg-white focus:border-white focus:outline-none md:w-auto md:text-xl md:focus:text-xl md:pl-2.5"
          placeholder="Search City..."
          aria-label="Search"
          aria-describedby="button-addon2"
          onKeyPress={(event) => {
            if (event.key === 'Enter') navigateToCity();
          }}
        />
        <button
          className="btn inline-block bg-steel-blue w-1/5 md:w-auto text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md border-white border-2 hover:shadow-lg focus:bg-steel-blue  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg active:text-steel-blue active:text-bold transition duration-150 ease-in-out flex items-center justify-center md:px-2 md:py-0.5"
          type="button"
          id="button-addon2"
          onClick={() => navigateToCity()}
        >
          <FontAwesomeIcon
            className="text-xs hover:scale-125 px-1.5 py-1.5 md:text-xl md:p-auto"
            icon={faMagnifyingGlassLocation}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
