import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingPage = () => (
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
);

export default LoadingPage;
