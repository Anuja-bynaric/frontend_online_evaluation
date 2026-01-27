import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white px-6 py-4 shadow-md flex justify-between items-center h-[10%]">

      
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/agent/desktop")}
      >
        Online Evaluation
      </h1>

      
      <ul className="flex space-x-6">
        <li
          className="cursor-pointer hover:text-gray-300 transition-colors duration-200"
          onClick={() => navigate("/agent/desktop")}
        >
          Agent
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
