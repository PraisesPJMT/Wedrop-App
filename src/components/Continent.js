import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../redux/api/api';
import CountryList from './CountryList';

const Continent = () => {
  const { continent } = useParams();
  const continentName = continent.replace(/-/g, ' ');
  const continentData = api.getContinentData(continentName);
  return (
    <>
      <section className="text-white relative h-[200px] p-3">
        <img
          className="opacity-20 h-full"
          src={`https://raw.githubusercontent.com/PraisesPJMT/Data/main/maps/${continentData.continent.toLowerCase().replace(/ /g, '-')}.png`}
          alt="World Map"
        />
        <div className="absolute top-[20%] right-6 text-right w-2/4">
          <h1 className="font-black text-2xl">{continentData.continent}</h1>
          <h2 className="font-bold text-xm">
            Check Weather in Cities All Over
            {' '}
            {continentData.continent}
          </h2>
          <p className="font-xl">
            {continentData.cityCount.toLocaleString()}
            + Cities
          </p>
        </div>
      </section>
      <div className="text-white bg-strip-blue p-1">
        <p className="text-xs font-bold">CITIES BY COUNTRIES</p>
      </div>
      <section className="text-white">
        <CountryList
          key={continentData.id}
          countries={continentData.countries}
        />
      </section>
    </>
  );
};

export default Continent;
