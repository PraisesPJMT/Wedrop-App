import React, { useState } from 'react';
import PropTypes from 'prop-types';
import City from './CityListItem';
import Icon from './Icon';

const CityList = ({ countryCities }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]" onClick={() => handleOpen(1)}>
          Countries from A - E
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-4 md:grid-cols-8 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]" onClick={() => handleOpen(2)}>
          Cities from F - J
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-4 md:grid-cols-8 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]" onClick={() => handleOpen(3)}>
          Cities from K - O
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-4 md:grid-cols-8 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]" onClick={() => handleOpen(4)}>
          Cities from P - T
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-4 md:grid-cols-8 overflow-y-auto pt-0"
        >
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
      <details
        className="border-grey-lighter bg-dark-blue cursor-pointer"
      >
        <summary className="flex justify-between px-4 py-3 border-b border-b-white font-bold text-[1rem]" onClick={() => handleOpen(5)}>
          Cities from U - Z
          <Icon />
        </summary>
        <div
          className="bg-cornflower-blue grid grid-cols-4 md:grid-cols-8 overflow-y-auto pt-0"
        >
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
};

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
