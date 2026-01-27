import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadForm from '../components/UploadForm'
import AgentDashboard from '../Pages/AgentDashboard'

const Routess = () => {
  return (
    <>
        <Routes>
            <Route path="/agent/desktop" element={<AgentDashboard/>}/>
            

        </Routes>
      
    </>
  )
}

export default Routess
