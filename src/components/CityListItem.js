import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const City = ({ country, cityName, continent }) => (
  <Link
    key={cityName}
    to={`/${continent.toLowerCase().replace(/ /g, '-')}/${country.toLowerCase().replace(/ /g, '-')}/${cityName.toLowerCase().replace(/ /g, '-')}`}
    className="flex p-1 flex-col items-center justify-center border border-steel-blue"
  >
    <FontAwesomeIcon
      className="text-xl md:text-2xl"
      icon={faTreeCity}
    />
    <p className="text-center font-bold text-xs">
      {cityName}
    </p>
  </Link>
);

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};

export default City;
