import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const FailedPage = () => (
  <div
    className="flex flex-col justify-center gap-5 items-center w-full h-[400px]"
  >
    <FontAwesomeIcon
      className="text-8xl text-white"
      icon={faCircleExclamation}
    />
    <span className="text-white text-4xl font-bold block">
      {/* <FontAwesomeIcon
        className="animate-spin"
        icon={faSpinner}
      /> */}
      Can&apos;t find City!
    </span>
  </div>
);

export default FailedPage;
