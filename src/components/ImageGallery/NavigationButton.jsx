import React from 'react';

const NavigateButton = ({ url, text }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 bg-main-color hover:bg-yellow-300 hover:text-main-color text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default NavigateButton;
