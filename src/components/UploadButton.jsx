import React from 'react';

const UploadButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-900  text-white font-semibold py-2 px-4 rounded shadow transition absolute top-15 right-4"
    >
      Upload Answer Sheet
    </button>
  );
};

export default UploadButton;
