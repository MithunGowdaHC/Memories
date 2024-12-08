import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { URL } from "../url";
import axios from "axios";

const Menu = () => {
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext)
  const handleLogout = async () => {
    try{

      const res = await axios.get(URL + "/api/auth/logout", {withCredentials : true})
      setUser(null)


    }catch(err){

    }

  }
  return (
    <div className=" flex flex-col  md:right-32 items-start   top-12 right-6 rounded-md p-4 space-y-4 absolute   w-[200px] bg-black ">
      {!user && (
        <h3 className=" cursor-pointer  text-white text-sm hover:text-gray-500">Login</h3>
      )}
      {!user && (
        <h3 className=" cursor-pointer   text-white text-sm hover:text-gray-500">Register</h3>
      )}
      {user && (
        <h3 className=" cursor-pointer   text-white text-sm hover:text-gray-500">Profile</h3>
      )}
      {user && (
        <h3 className=" cursor-pointer   text-white text-sm hover:text-gray-500">Write</h3>
      )}
      {user && (
        <h3 className="cursor-pointer   text-white text-sm hover:text-gray-500">My Blogs</h3>
      )}
      {user && (
        <h3 onClick={handleLogout} className="cursor-pointer   text-white text-sm hover:text-gray-500">Logout</h3>
      )}
    </div>
  );
};

export default Menu;
