import React from 'react';
import { Link } from 'react-router-dom';
import cities from '../redux/api/countryLog.json';

const Home = () => {
  const cityCount = () => {
    let sum = 0;
    cities.forEach((country) => { sum += country.cityCount; });
    return sum;
  };
  return (
    <>
      <section className="text-white relative">
        <img className="w-full opacity-20" src="https://raw.githubusercontent.com/PraisesPJMT/Data/main/maps/world-map.png" alt="World Map" />
        <div className="absolute top-[20%] right-6 text-right w-2/4">
          <h1 className="font-black text-2xl">Wadrop</h1>
          <h2 className="font-bold text-xm">
            Check Weather in Cities All Over the World
          </h2>
          <p className="font-xl">
            {cityCount().toLocaleString()}
            + Cities
          </p>
        </div>
      </section>
      <div className="text-white bg-strip-blue p-1">
        <p className="text-xs font-bold">COUNTRIES BY CONTINENTS</p>
      </div>
      <section className="text-white grid grid-cols-2 overflow-y-auto ">
        { cities.map((data) => (
          <Link
            className={`h-[180px] relative ${(data.id === 2 || data.id === 3 || data.id === 6) ? 'bg-dark-blue' : ''}`}
            key={data.continent}
            to={`/${data.continent.toLowerCase().replace(/ /g, '-')}`}
          >
            <img
              className="w-4/5 p-3 opacity-50 hover:scale-110"
              src={`https://raw.githubusercontent.com/PraisesPJMT/Data/main/maps/${data.continent.toLowerCase().replace(/ /g, '-')}.png`}
              alt={data.continent}
            />
            <p className="flex flex-col absolute bottom-3 right-3 text-right">
              <span className="font-bold">{data.continent}</span>
              <span className="">
                {data.cityCount.toLocaleString()}
                + cities
              </span>
            </p>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
