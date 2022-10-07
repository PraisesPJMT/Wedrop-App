import React from 'react';
import { useParams } from 'react-router-dom';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import City from './CityListItem';
import CityList from './CityList';
import api from '../redux/api/api';

const Country = () => {
  const { continent, country } = useParams();
  const continentName = continent.replace(/-/g, ' ');
  const countryName = country.replace(/-/g, ' ');
  const countryData = api.getCountryData(continentName, countryName);
  return (
    <>
      <section className="text-white relative flex justify-end h-[200px] p-3">
        <img
          className="opacity-20 h-full"
          src={`https://raw.githubusercontent.com/PraisesPJMT/Data/main/maps/${countryData.countryName.toLowerCase().replace(/ /g, '-').replace(/'/g, '')}.png`}
          alt={countryData.countryName}
        />
        <FontAwesomeIcon
          className="text-xl absolute top-[40%] right-[25%] md:text-2xl md:p-auto"
          icon={faMapPin}
        />
        <div className="absolute top-[20%] left-2 text-left w-3/4">
          <h2 className="font-black text-2xl">{countryData.countryName}</h2>
          <h3 className="font-bold text-xm">
            Check Weather in Cities All Over
            {' '}
            {countryName.charAt(0).toUpperCase() + countryName.slice(1)}
          </h3>
          <p className="font-xl">
            {countryData.countryCities.length.toLocaleString()}
            + Cities
          </p>
        </div>
      </section>
      <div className="text-white bg-strip-blue p-1">
        <p className="text-xs font-bold">CITIES BY ALPHABETS</p>
      </div>
      <section className={`text-white ${(countryData.cityCount < 50) ? 'grid grid-cols-4' : ''}`}>
        {(countryData.cityCount < 50) ? countryData.countryCities.map((city) => (
          <City
            key={city.cityId}
            country={city.country}
            cityName={city.cityName}
            continent={city.continent}
          />
        )) : (
          <CityList countryCities={countryData.countryCities} />
        )}
      </section>
    </>
  );
};

export default Country;
