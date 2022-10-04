import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = ({ countryName, cityCount }) => (
  <Link
    key={countryName}
    to={`/${countryName.toLowerCase().replace(/ /g, '-')}`}
    className="flex p-6 flex-col items-center justify-center relative border-2 border-steel-blue"
  >
    <img
      className="opacity-50 h-full hover:scale-110 transition duration-500 ease-in-out"
      src={`./assets/maps/${countryName.toLowerCase().replace(/ /g, '-')}.png`}
      alt={countryName}
    />
    <FontAwesomeIcon
      className="text-xl absolute top-3 right-6 md:text-2xl md:p-auto"
      icon={faMagnifyingGlassLocation}
    />
    <p className="absolute bottom-3 left-3 flex flex-col text-left">
      <span className="font-bold">{countryName}</span>
      <span className="">
        {cityCount.toLocaleString()}
        + Cities
      </span>
    </p>
  </Link>
);

Country.propTypes = {
  countryName: PropTypes.string.isRequired,
  cityCount: PropTypes.number.isRequired,
};

export default Country;
