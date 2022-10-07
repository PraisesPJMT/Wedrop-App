import { DateTime } from 'luxon';
import cities from './countryLog.json';

const Key = '8782bfb16581a4669a00572d09443ee0';
const BaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const api = {
  fetchWeather: async (city) => {
    const response = await fetch(`${BaseUrl}q=${city}&appid=${Key}`);
    const fetchedData = await response.json();
    const {
      id,
      name: cityName,
      sys: { country: countryCode, sunrise, sunset },
      timezone,
      dt: dateTime,
      weather: [{ main, description, icon: weatherIconCode }],
      visibility,
      main: {
        temp, temp_min: minTemp, temp_max: maxTemp, humidity, pressure, feels_like: realFeel,
      },
      wind: { speed: windSpeed, deg: windDirection, gust },
    } = await fetchedData;
    return ({
      id,
      weatherIconCode,
      cityName,
      dateTime,
      countryCode,
      timezone,
      weatherData: {
        main,
        description,
        visibility,
        gust,
        humidity,
        pressure,
        temp,
        minTemp,
        maxTemp,
        realFeel,
        windSpeed,
        windDirection,
        sunrise,
        sunset,
      },
    });
  },
  getCities: () => {
    const Cities = [];
    cities.forEach((continent) => Cities.push(continent));
    return Cities;
  },
  getCitiesCount: () => {
    let sum = 0;
    cities.forEach((country) => { sum += country.cityCount; });
    return sum;
  },
  getContinentData: (continentName) => {
    let ContinentData = null;
    cities.forEach((cont) => {
      if (cont.continent.toLowerCase() === continentName) {
        ContinentData = cont;
      }
    });
    return ContinentData;
  },
  getCountryData: (continentName, countryName) => {
    let CountryData = null;
    cities.forEach((cont) => {
      if (cont.continent.toLowerCase() === continentName) {
        cont.countries.forEach((country) => {
          if (country.countryName.toLowerCase() === countryName) {
            CountryData = country;
          }
        });
      }
    });
    return CountryData;
  },
  getContinentCountryName: (code) => {
    let ContinentName = null;
    let CountryName = null;
    cities.forEach((cont) => {
      cont.countries.forEach((country) => {
        if (country.countryCode === code) {
          CountryName = country.countryName;
          ContinentName = country.continent;
        }
      });
    });
    return { ContinentName, CountryName };
  },
  getLocalTime: (
    sec,
    zone,
    format = 'hh:mm a',
  ) => (DateTime.fromSeconds(sec).setZone(zone).toFormat(format)),
  getWeatherIcon: (weatherIconCode) => `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`,
};

export default api;
