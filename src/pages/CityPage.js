import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { allStatus, allWeather, getWeather } from '../redux/weather/weather';
import City from '../components/City';

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
        <>
          <div
            className="flex flex-col justify-center gap-5 items-center w-full h-[400px]"
          >
            <FontAwesomeIcon
              className="text-5xl text-white"
              icon={faCloudSunRain}
            />
            <span className="text-white text-9xl block">
              <FontAwesomeIcon
                className="animate-spin"
                icon={faSpinner}
              />
            </span>
          </div>
        </>
      )
        : <City weather={weather} /> }
    </>
  );
};

export default CityPage;
