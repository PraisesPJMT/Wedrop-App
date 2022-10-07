import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Country from './CountryListItem';

const CountryList = ({ countries }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="px-4 py-3 border-b border-b-white flex justify-between font-bold text-[1rem]">
          Countries from A - E
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-2 md:grid-cols-6 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]">
          Countries from F - J
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-2 md:grid-cols-6 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]">
          Countries from K - O
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-2 md:grid-cols-6 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]">
          Countries from P - T
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-2 md:grid-cols-6 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]" onClick={() => handleOpen(5)}>
          Countries from U - Z
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-2 md:grid-cols-6 overflow-y-auto pt-0"
        >
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
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    countryId: PropTypes.string,
    countryName: PropTypes.string,
    continent: PropTypes.string,
    cityCount: PropTypes.number,
    countryCities: PropTypes.arrayOf(PropTypes.shape({
      cityId: PropTypes.string,
      cityName: PropTypes.string,
      continent: PropTypes.string,
      country: PropTypes.string,
      coordinates: PropTypes.shape({
        lon: PropTypes.number,
        lat: PropTypes.number,
      }).isRequired,
    })).isRequired,
  })).isRequired,
};

export default CountryList;
