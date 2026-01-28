import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ setForm }) => {
  const [file, setFile] = useState(null);
  const [barcode, setBarcode] = useState('');
  const [pageNumber, setPageNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('file', file);
      data.append('barcode', barcode);
      data.append('no_of_pages', pageNumber);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        data
      );

      setForm(false); // close form on success
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
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
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        required
        className="w-full mb-4 px-4 py-2 rounded-md bg-blue-800 text-white placeholder-blue-400 focus:outline-none"
      />

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        required
        className="w-full mb-4 px-4 py-2 rounded-md bg-blue-800 text-white"
      />

      <input
        type="number"
        placeholder="Enter number of pages"
        value={pageNumber}
        onChange={(e) => setPageNumber(e.target.value)}
        required
        min={1}
        className="w-full mb-6 px-4 py-2 rounded-md bg-blue-800 text-white placeholder-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-white text-blue-900 font-semibold py-2 rounded-md hover:bg-blue-100 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
