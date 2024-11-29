import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-16 py-4 bg-gray-100 shadow-sm">
        <h1 className="text-2xl font-extrabold text-blue-600">Storyly</h1>
        <h3>
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your username"
          />

          <input
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your email"
          />
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">
            Register
          </button>

          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">LogIn</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default Register;