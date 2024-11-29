import React from 'react'
import HomePosts from '../components/HomePosts'
import { IoMdTrendingUp, IoMdFlash, IoMdStar } from 'react-icons/io'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Amazing Stories <br /> from Around the World
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore diverse narratives, travel experiences, and inspiring journeys shared by passionate writers.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
              Start Reading
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition duration-300">
              Write a Story
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: <IoMdTrendingUp className="text-4xl text-indigo-600" />, 
              title: "Trending Stories", 
              description: "Most popular posts right now" 
            },
            { 
              icon: <IoMdFlash className="text-4xl text-green-500" />, 
              title: "Latest Updates", 
              description: "Fresh stories just published" 
            },
            { 
              icon: <IoMdStar className="text-4xl text-yellow-500" />, 
              title: "Editors' Picks", 
              description: "Curated top-quality content" 
            }
          ].map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-around items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Recent Stories
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 transition duration-300">
            View All Posts
          </button>
        </div>

        <div className="space-y-8">
          <HomePosts />
          <HomePosts />
          <HomePosts />
          <HomePosts />
          <HomePosts />
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

      {/* Newsletter CTA */}
      {/* <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Never Miss a Story
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Subscribe to our newsletter and get the best stories delivered straight to your inbox.
          </p>
          <div className="max-w-xl mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-3 rounded-l-full text-gray-800"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-r-full hover:bg-gray-100 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </div>
    <Footer/>
    </>
    
  )
}

export default Home