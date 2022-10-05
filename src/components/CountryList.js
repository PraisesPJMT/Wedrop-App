import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import Country from './CountryListItem';

const CountryList = ({ countries }) => (
  <>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Countries from A - E
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-2 overflow-y-auto">
        { countries.filter((country) => {
          const names = ['A', 'B', 'C', 'D', 'E'];
          return (names.includes(country.countryName.charAt(0))) ? country : null;
        }).map((country) => (
          <Country
            key={country.countryName}
            cityCount={country.cityCount}
            countryName={country.countryName}
            continent={country.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Countries from F - J
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-2 overflow-y-auto">
        { countries.filter((country) => {
          const names = ['F', 'G', 'H', 'I', 'J'];
          return (names.includes(country.countryName.charAt(0))) ? country : null;
        }).map((country) => (
          <Country
            key={country.countryName}
            cityCount={country.cityCount}
            countryName={country.countryName}
            continent={country.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Countries from K - O
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-2 overflow-y-auto">
        { countries.filter((country) => {
          const names = ['K', 'L', 'M', 'N', 'O'];
          return (names.includes(country.countryName.charAt(0))) ? country : null;
        }).map((country) => (
          <Country
            key={country.countryName}
            cityCount={country.cityCount}
            countryName={country.countryName}
            continent={country.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Countries from P - T
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-2 overflow-y-auto">
        { countries.filter((country) => {
          const names = ['P', 'Q', 'R', 'S', 'T'];
          return (names.includes(country.countryName.charAt(0))) ? country : null;
        }).map((country) => (
          <Country
            key={country.countryName}
            cityCount={country.cityCount}
            countryName={country.countryName}
            continent={country.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Countries from U - Z
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-2 overflow-y-auto">
        { countries.filter((country) => {
          const names = ['U', 'V', 'W', 'X', 'Y', 'Z'];
          return (names.includes(country.countryName.charAt(0))) ? country : null;
        }).map((country) => (
          <Country
            key={country.countryName}
            cityCount={country.cityCount}
            countryName={country.countryName}
            continent={country.continent}
          />
        ))}
      </div>
    </details>
  </>
);

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    countryId: PropTypes.string,
    countryName: PropTypes.string,
    continent: PropTypes.string,
    cityCount: PropTypes.number,
  })).isRequired,
};

export default CountryList;
