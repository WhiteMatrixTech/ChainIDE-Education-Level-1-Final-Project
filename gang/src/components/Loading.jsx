import React from 'react';

import { PropTypes } from 'prop-types';
const Loading = ({ text }) => {
  return (
    <div className="absolute bg-black bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
      <div className="flex items-center">
        <span className="text-3xl mr-4">{text}</span>
        <svg
          className="animate-spin h-8 w-8 text-white-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75 fill-red-600"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired
};
export default Loading;
