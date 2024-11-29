import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-8 md:px-[200px] mt-8">
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl  font-bold text-black md:text-3xl">
            10 Best places to visit in India
          </h1>
          <div className=" flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-between mt-2 md:mt-4">
          <p>@midev</p>
          <div className="flex space-x-2">
            <p>{new Date().toDateString()}</p>
            <p>9:50</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1730650352721-5f88c64d3394?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" w-[30%] mx-auto mt-8 "
        />
        <p className=" mx-auto mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus non
          nobis aliquam neque quis voluptas quibusdam velit officiis cum omnis?
        </p>
        <div className=" flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className=" flex justify-center items-center space-x-2">
            <div className=" bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className=" bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className=" flex flex-col mt-4">
          <h3 className=" mt-6 mb-4  font-semibold">Comments:</h3>
          {/* comments */}
          <div className=" px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between ">
              <h3 className=" font-bold text-gray-600 ">@midev</h3>
              <div className="flex  justify-center items-center space-x-4">
                <p className=" text-gray-500 text-sm">
                  {new Date().toDateString()}
                </p>
                <p className=" text-gray-500 text-sm">9:50</p>
                <div className=" flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className=" px-4 mt-2  ">Nice information!</p>
          </div>
          {/* comments */}

          <Comment/>
          <Comment/>
          <Comment/>
        </div>
        <div className=" flex  w-full flex-col mt-4 md:flex-row">
            {/* write a comment */}
            <input type="text" placeholder=" Add a comment" className=" md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" />
            <button className=" text-sm  bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add a Comment</button>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
