import React from 'react';
import PropTypes from 'prop-types';
import {
  faTemperatureLow, faTemperatureHigh, faWind, faDroplet,
  faCompass, faSun, faMoon, faEyeSlash, faSmog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../redux/api/api';

const City = ({ weather }) => {
  const { dateTime: sec, timezone: zone, weatherIconCode } = weather;
  const localTIme = api.getLocalTime(sec, zone, 'ccc, dd LL yyyy\' | Local time: \'hh:mm a');
  const convertToKelvin = (temp) => (Math.round((temp - 273) * 10) / 10);
  const { ContinentName, CountryName } = api.getContinentCountryName(weather.countryCode);
  return (
    <>
      <section className="text-white relative p-3 text-center md:max-w-xl md:mx-auto">
        <h2 className="text-4xl font-bold">{ weather.cityName }</h2>
        <p className="text-xs">
          <span>{ContinentName}</span>
          {' | '}
          <span>{CountryName}</span>
        </p>
        <p className="text-xs font-bold">{ localTIme }</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <img src={api.getWeatherIcon(weatherIconCode)} alt="Weather Icon" />
            <p className="font-bold text-2xl">
              {convertToKelvin(weather.weatherData.temp)}
              °C
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right text-[0.9rem] font-bold">
            <p>
              <FontAwesomeIcon
                icon={faTemperatureLow}
              />
              {' Real Feel '}
              {convertToKelvin(weather.weatherData.realFeel)}
              {' °C'}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faDroplet}
              />
              {' Humidity '}
              {Math.round(weather.weatherData.humidity * 10) / 10}
              {' %'}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faWind}
              />
              {' Wind speed '}
              {Math.round(weather.weatherData.windSpeed * 10) / 10}
              {' m/s'}
            </p>
          </div>
        </div>
      </section>
      <div className="text-white bg-strip-blue p-1">
        <p className="text-xs font-bold md:text-center">MORE WEATHER INFORMATION</p>
      </div>
      <section className="text-white grid grid-cols-2 overflow-y-auto md:max-w-xl md:mx-auto">
        <div className="py-5 px-3 flex flex-col justify-center">
          <h3 className="text-center font-bold">Sun</h3>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              icon={faSun}
            />
            {' Sunrise '}
            {api.getLocalTime(weather.weatherData.sunrise, zone) || '-'}
          </p>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              className=""
              icon={faMoon}
            />
            {' Sunset '}
            {api.getLocalTime(weather.weatherData.sunset, zone) || '-'}
          </p>
        </div>
        <div className="py-5 px-3 flex flex-col justify-center bg-dark-blue">
          <h3 className="text-center font-bold">Temperature</h3>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              icon={faTemperatureLow}
            />
            {' Min Temp '}
            {convertToKelvin(weather.weatherData.minTemp) || '-'}
            {' °C'}
          </p>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              icon={faTemperatureHigh}
            />
            {' Max Temp '}
            {convertToKelvin(weather.weatherData.maxTemp) || '-'}
            {' °C'}
          </p>
        </div>
        <div className="py-5 px-3 flex flex-col justify-center bg-dark-blue">
          <h3 className="text-center font-bold">Wind</h3>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              icon={faCompass}
            />
            {' Direction '}
            {convertToKelvin(weather.weatherData.windDirection) || '-'}
            °
          </p>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              className=""
              icon={faWind}
            />
            {' Gust '}
            {weather.weatherData.gust || '-'}
            {' m/s'}
          </p>
        </div>
        <div className="py-5 px-3 flex flex-col justify-center">
          <h3 className="text-center font-bold">Others</h3>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              icon={faEyeSlash}
            />
            {' Visibility '}
            {(weather.weatherData.visibility / 1000) || '-'}
            {' km'}
          </p>
          <p className="text-left text-[0.8rem] font-bold pt-2 pb-0.5">
            <FontAwesomeIcon
              icon={faSmog}
            />
            {' Pressure '}
            {Math.round((weather.weatherData.pressure * 0.01450377) * 10) / 10}
            {' Psi'}
          </p>
        </div>
      </section>
    </>
  );
};

City.propTypes = {
  weather: PropTypes.shape({
    id: PropTypes.number,
    weatherIconCode: PropTypes.string,
    cityName: PropTypes.string,
    dateTime: PropTypes.number,
    countryCode: PropTypes.string,
    timezone: PropTypes.number,
    weatherData: PropTypes.shape({
      description: PropTypes.string,
      visibility: PropTypes.number,
      gust: PropTypes.number,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      realFeel: PropTypes.number,
      temp: PropTypes.number,
      minTemp: PropTypes.number,
      maxTemp: PropTypes.number,
      windSpeed: PropTypes.number,
      windDirection: PropTypes.number,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default City;
