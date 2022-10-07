import React from 'react';
import { render } from '@testing-library/react';
import City from '../components/City';
import Function from '../redux/api/api';

const mockedWeather = {
  id: 2332453,
  weatherIconCode: '10d',
  cityName: 'Lagos',
  dateTime: 1665149696,
  countryCode: 'NG',
  timezone: 3600,
  weatherData: {
    main: 'Rain',
    description: 'moderate rain',
    visibility: 10000,
    gust: 3.81,
    humidity: 86,
    pressure: 1010,
    temp: 302.33,
    minTemp: 302.33,
    maxTemp: 302.33,
    realFeel: 309.33,
    windSpeed: 2.23,
    windDirection: 207,
    sunrise: 1665120715,
    sunset: 1665164014,
  },
};

describe('City page test', () => {
  test('City page renders correctly', () => {
    const city = render(
      <City weather={mockedWeather} />,
    );
    expect(city).toMatchSnapshot();
  });

  test('Check for city to render right city name \'Lagos\'', () => {
    render(
      <City weather={mockedWeather} />,
    );
    expect(
      document.querySelector('h2').textContent,
    ).toBe(mockedWeather.cityName);
  });

  test('Check for city to render right country & continent name', () => {
    render(
      <City weather={mockedWeather} />,
    );
    const {
      ContinentName,
      CountryName,
    } = Function.getContinentCountryName(mockedWeather.countryCode);
    expect(
      document.querySelector('.continent').textContent,
    ).toBe(ContinentName);
    expect(
      document.querySelector('.country').textContent,
    ).toBe(CountryName);
  });

  test('Check for city to render temperature reading \'Lagos\'', () => {
    render(
      <City weather={mockedWeather} />,
    );
    expect(
      document.querySelector('.temperature').textContent,
    ).toBe('29.3°C');
  });
});
