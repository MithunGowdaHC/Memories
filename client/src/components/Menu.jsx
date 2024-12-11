import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogout = async () => {
    try{

      const res = await axios.get(URL + "/api/auth/logout", {withCredentials : true})
      setUser(null)
      navigate("/login")


    }catch(err){

    }

  }
  return (
    <div className=" flex flex-col z-10  md:right-32 items-start   top-12 right-6 rounded-md p-4 space-y-4 absolute   w-[200px] bg-black ">
      {!user && (
        <h3 className=" cursor-pointer  text-white text-sm hover:text-gray-500"><Link to={"/login"}>Login</Link></h3>
      )}
      {!user && (
        <h3 className=" cursor-pointer   text-white text-sm hover:text-gray-500"><Link to={"/register"}>Register</Link></h3>
      )}
      {user && (
        <h3 className=" cursor-pointer   text-white text-sm hover:text-gray-500"><Link to={"/profile/"+user._id}>Profile</Link></h3>
      )}
      {user && (
        <h3 className=" cursor-pointer   text-white text-sm hover:text-gray-500"><Link to={"/write"}>Write</Link></h3>
      )}
      {user && (
        <h3 className="cursor-pointer   text-white text-sm hover:text-gray-500"><Link to={"/myblogs/"+user._id}>My blogs</Link></h3>
      )}
      {user && (
        <h3 onClick={handleLogout} className="cursor-pointer   text-white text-sm hover:text-gray-500"><Link to={"/logout"}>Logout</Link></h3>
      )}
    </div>
  );
};

export default Menu;
