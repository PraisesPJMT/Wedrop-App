import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allStatus, allWeather, getWeather } from '../redux/weather/weather';
import City from '../components/City';
import LoadingPage from './LoadingPage';

const CityPage = () => {
  const weather = useSelector(allWeather);
  const status = useSelector(allStatus);
  const dispatch = useDispatch();
  const { city } = useParams();
  const cityName = city.replace(/-/g, ' ');
  useEffect(() => {
    dispatch(getWeather(cityName));
  }, []);
  return (
    <>
      { (status === 'loading' || status === 'idle') ? (
        <LoadingPage />
      )
        : <City weather={weather} /> }
    </>
  );
};

export default CityPage;
