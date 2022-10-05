import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import City from './CityListItem';

const CityList = ({ countryCities }) => (
  <>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Cities from A - E
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-4 overflow-y-auto">
        { countryCities.filter((city) => {
          const names = ['A', 'B', 'C', 'D', 'E'];
          return (names.includes(city.cityName.charAt(0))) ? city : null;
        }).map((city) => (
          <City
            key={city.cityId}
            country={city.country}
            cityName={city.cityName}
            continent={city.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Cities from F - J
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-4 overflow-y-auto">
        { countryCities.filter((city) => {
          const names = ['F', 'G', 'H', 'I', 'J'];
          return (names.includes(city.cityName.charAt(0))) ? city : null;
        }).map((city) => (
          <City
            key={city.cityId}
            country={city.country}
            cityName={city.cityName}
            continent={city.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Cities from K - O
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-4 overflow-y-auto">
        { countryCities.filter((city) => {
          const names = ['K', 'L', 'M', 'N', 'O'];
          return (names.includes(city.cityName.charAt(0))) ? city : null;
        }).map((city) => (
          <City
            key={city.cityId}
            country={city.country}
            cityName={city.cityName}
            continent={city.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Cities from P - T
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-4 overflow-y-auto">
        { countryCities.filter((city) => {
          const names = ['P', 'Q', 'R', 'S', 'T'];
          return (names.includes(city.cityName.charAt(0))) ? city : null;
        }).map((city) => (
          <City
            key={city.cityId}
            country={city.country}
            cityName={city.cityName}
            continent={city.continent}
          />
        ))}
      </div>
    </details>
    <details className="question py-4 border-b border-grey-lighter bg-dark-blue cursor-pointer">
      <summary className="flex items-center font-bold px-3">
        Cities from U - Z
        <button type="button" className="ml-auto">
          <FontAwesomeIcon
            id="mobileMenu"
            className="text-xl text-white"
            icon={faCircleRight}
          />
        </button>
      </summary>

      <div className="mt-4 leading-normal text-md bg-cornflower-blue grid grid-cols-4 overflow-y-auto">
        { countryCities.filter((city) => {
          const names = ['U', 'V', 'W', 'X', 'Y', 'Z'];
          return (names.includes(city.cityName.charAt(0))) ? city : null;
        }).map((city) => (
          <City
            key={city.cityId}
            country={city.country}
            cityName={city.cityName}
            continent={city.continent}
          />
        ))}
      </div>
    </details>
  </>
);

CityList.propTypes = {
  countryCities: PropTypes.arrayOf(PropTypes.objectOf({
    cityId: PropTypes.string,
    cityName: PropTypes.string,
    country: PropTypes.string,
    continent: PropTypes.string,
    countryCities: PropTypes.objectOf({
      lon: PropTypes.number,
      lat: PropTypes.number,
    }).isRequired,
  })).isRequired,
};

export default CityList;
