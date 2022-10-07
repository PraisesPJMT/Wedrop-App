import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ id, open }) => (
  <FontAwesomeIcon
    id="mobileMenu"
    className={`text-xl text-white ${
      id === open ? 'rotate-180' : ''
    } transition-transform`}
    icon={faCircleDown}
  />
);

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

export default Icon;
