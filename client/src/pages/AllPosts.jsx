import React, { useContext, useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import { IoMdTrendingUp, IoMdFlash, IoMdStar } from "react-icons/io";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { URL } from "../url";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../Context/UserContext";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen ">
       

        

        {/* Blog Posts Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-around items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Recent Stories</h2>
            
          </div>

          <div className=" px-8 md:px-[200px] min-h-[80vh]">
            {loader ? (
              <div className=" h-[40vh] flex justify-center  items-center">
                <Loader />
              </div>
            ) : !noResults ? (
              posts.map((post) => (
                <>
                  <Link to={user? `/posts/post/${post._id}` : "/login"}>
                    <HomePosts key={post._id} post={post} />
                  </Link>
                </>
              ))
            ) : (
              <h3 className=" text-center  font-bold mt-16">
                No Posts available
              </h3>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-4">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300">
              Previous
            </button>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
              Next
            </button>
          </div>
        </div>

        
      </div>
      <Footer />
    </>
  );
};

export default AllPosts;
