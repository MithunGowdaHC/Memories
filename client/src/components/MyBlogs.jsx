// import React, { useContext, useEffect, useState } from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import Loader from './Loader';
// import { Link, useLocation } from 'react-router-dom';
// import HomePosts from './HomePosts';
// import { UserContext } from '../Context/UserContext';

// const MyBlogs = () => {
//     const [posts, setPosts] = useState([]);
//     const { search } = useLocation();
//     const [noResults, setNoResults] = useState(false);
//     const [loader, setLoader] = useState(false);
//     const { user } = useContext(UserContext);
//     const fetchPosts = async () => {
//       setLoader(true);
//       try {
//         const res = await axios.get(URL + "/api/posts/user"+user._id + search);
//         setPosts(res.data);
//         if (res.data.length === 0) {
//           setNoResults(true);
//         } else {
//           setNoResults(false);
//         }
//         setLoader(false);
//       } catch (error) {
//         console.log(error);
//         setLoader(true);
//       }
//     };
  
//     useEffect(() => {
//       fetchPosts();
//     }, [search]);
//   return (
//     <div>
//         <Navbar/>
//         <div className=" px-8 md:px-[200px] min-h-[80vh]">

//         {loader ? (
//               <div className=" h-[40vh] flex justify-center  items-center">
//                 <Loader />
//               </div>
//             ) : !noResults ? (
//               posts.map((post) => (
//                 <>
//                   <Link to={user? `/posts/post/${post._id}` : "/login"}>
//                     <HomePosts key={post._id} post={post} />
//                   </Link>
//                 </>
//               ))
//             ) : (
//               <h3 className=" text-center  font-bold mt-16">
//                 No Posts available
//               </h3>
//             )}
//             </div>
//         <Footer/>
//     </div>
//   )
// }

// export default MyBlogs

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import { Link, useLocation } from "react-router-dom";
import HomePosts from "./HomePosts";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { URL } from "../url";

const MyBlogs = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    if (!user) {
      console.error("User not logged in");
      return;
    }
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id + search);
      setPosts(res.data);
      setNoResults(res.data.length === 0);
    } catch (error) {
      console.error(error);
      setNoResults(true);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (user) fetchPosts();
  }, [search, user]);

  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
              <HomePosts post={post} />
            </Link>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No Posts available</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
