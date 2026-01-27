import React from 'react';

const UploadForm = ({ setForm }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-900 text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 border-b border-blue-600 pb-2">
        Upload Answer Sheet
      </h2>

      <input
        type="text"
        placeholder="Enter barcode"
        required
        className="w-full mb-4 sm:mb-5 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-blue-800 placeholder-blue-400 text-white border border-transparent focus:outline-none focus:border-blue-400 transition"
      />

      <input
        type="file"
        required
        className="w-full mb-4 sm:mb-5 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-blue-800 text-white border border-transparent focus:outline-none focus:border-blue-400 transition"
      />

      <input
        type="number"
        placeholder="Enter number of pages"
        required
        min={1}
        className="w-full mb-5 sm:mb-7 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-blue-800 placeholder-blue-400 text-white border border-transparent focus:outline-none focus:border-blue-400 transition"
      />

      <button
        type="submit"
        className="w-full bg-white text-blue-900 font-semibold py-2 sm:py-3 rounded-md hover:bg-blue-100 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
