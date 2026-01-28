import React from 'react';

const AnsweSheetTable = () => {
  // Example data (replace with backend/state data)
 
  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full border-collapse border border-blue-700 shadow-lg rounded-md text-white">
        <thead className="bg-blue-800">
          <tr>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Barcode</th>
           
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Answer Sheet Barcode</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">File Name</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Pages</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Uploaded PDF Name</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Number of Pages</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Uploaded At</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-700' : 'bg-blue-900'}>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.barcode}</td>
              
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.answerSheetBarcode}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.fileName}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.pages}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.uploadedPdfName}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.numberOfPages}</td>
              <td className="py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base">{file.uploadedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnsweSheetTable;
