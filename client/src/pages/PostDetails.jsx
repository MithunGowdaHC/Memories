import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL, IF } from "../url";
import { UserContext } from "../Context/UserContext";
import Loader from "../components/Loader";

const PostDetails = () => {
  const { user } = useContext(UserContext);

  const postId = useParams().id;
  const [post, setPost] = useState({});
  
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const fetchPost = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      // setPost(res.data);
      setPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      // console.log(res.data)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPostComments = async () => {
    try {
      const res = await axios.get(URL + "/api/comments/post/" + postId)
      setComments(res.data)
      
    } catch (err) {
      console.log(err)
      
    }
  }
  useEffect(()=>{
      fetchPostComments()
  },[postId])

  const postComment = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post(URL + "/api/comments/create", {comment:comment,author:user.username,postId:postId,userId:user._id},{withCredentials:true})
      // fetchPostComments()
      // setComment("")
      window.location.reload(true)

      
    } catch (err) {
      console.log(err)
      
    }


  }
  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="  w-full h-[80vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className=" px-8 md:px-[200px] mt-8">
          <div className=" flex justify-between items-center">
            <h1 className=" text-2xl  font-bold text-black md:text-3xl">
              {post.title}
            </h1>
            {user?._id === post?.userId && (
              <div className="flex items-center justify-center space-x-2">
                <p
                  className="cursor-pointer"
                  onClick={() => navigate("/edit/" + postId)}
                >
                  <BiEdit />
                </p>
                <p className="cursor-pointer" onClick={handleDeletePost}>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          <div className=" flex items-center justify-between mt-2 md:mt-4">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img
            src={IF + post.photo}
            alt="none"
            className=" w-[30%] mx-auto mt-8 "
          />
          <p className=" mx-auto mt-8">{post.desc}</p>
          <div className=" flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className=" flex justify-center items-center space-x-2">
              {post.categories?.map((c, i) => (
                <div key={i} className=" bg-gray-300 rounded-lg px-3 py-1">
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col mt-4">
            <h3 className=" mt-6 mb-4  font-semibold">Comments:</h3>
            {/* comments */}
           
            

            {comments?.map((c)=>(
              <Comment key={c._id} c={c} post={post}/>
            ))}
          </div>
          <div className=" flex  w-full flex-col mt-4 md:flex-row">
            {/* write a comment */}
            <input
              type="text"
              onChange={(e)=>setComment(e.target.value)}
              placeholder=" Add a comment"
              className=" md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
            />
            <button onClick={postComment} className=" text-sm  bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">
              Add a Comment
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PostDetails;
