import React from "react"
import { Link } from "react-router-dom"
import { 
  IoLogoTwitter, 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoLinkedin 
} from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="bg-black mt-10 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold text-indigo-500 mb-4">Memories</h3>
            <p className="text-gray-400 mb-4">
              A platform where stories come alive. Discover, create, and share inspiring narratives from around the world.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <IoLogoTwitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <IoLogoFacebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <IoLogoInstagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <IoLogoLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4 text-indigo-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Featured Stories", path: "/featured" },
                { name: "Write a Story", path: "/write" },
                { name: "Community", path: "/community" },
                { name: "About Us", path: "/about" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transform transition duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4 text-indigo-400">Categories</h4>
            <ul className="space-y-2">
              {[
                "Travel", 
                "Technology", 
                "Personal Growth", 
                "Lifestyle", 
                "Culture"
              ].map((category) => (
                <li key={category}>
                  <Link 
                    to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transform transition duration-300 inline-block"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-4 text-indigo-400">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest stories and updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Memories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer