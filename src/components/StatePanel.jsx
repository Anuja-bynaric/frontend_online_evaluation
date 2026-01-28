import React from 'react'

const StatePanel = () => {
  return (
    <div className="bg-blue-900 text-white p-4 sm:p-6 rounded-lg shadow-md space-y-4">
  <p className="flex justify-between items-center text-sm sm:text-base">
    <span className="text-blue-300">Total Answer Sheets</span>
    <span className="font-bold text-lg">1000</span>
  </p>

  <p className="flex justify-between items-center text-sm sm:text-base">
    <span className="text-blue-300">Day-wise File Upload</span>
    <span className="font-bold text-lg">400</span>
  </p>

  <p className="flex justify-between items-center text-sm sm:text-base">
    <span className="text-blue-300">Invalid Answer Sheets</span>
    <span className="font-bold text-lg text-white-300">100</span>
  </p>
</div>

  )
}

export default StatePanel
