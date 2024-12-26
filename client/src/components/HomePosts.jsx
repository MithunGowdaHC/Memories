import React from 'react';
import { IF } from '../url';
import { BsCalendarEvent, BsClock, BsPersonCircle } from 'react-icons/bs';

const HomePosts = ({post}) => {
  return (
    <div className="w-full group hover:transform hover:scale-[1.02] transition-all duration-300 ease-in-out mb-8">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 h-full">
        {/* Image Container */}
        <div className="relative w-full md:w-1/3 md:min-h-[300px]">
          <div className="absolute inset-0">
            <img
              src={IF + post.photo}
              className="h-full w-full object-cover"
              alt={post.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Category & Date */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-4 py-1.5 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full">
                Blog Post
              </span>
              <div className="flex items-center space-x-2 text-gray-500">
                <BsCalendarEvent className="w-4 h-4" />
                <span className="text-sm">{new Date(post.updatedAt).toString().slice(0, 15)}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 line-clamp-3 text-base leading-relaxed">
              {post.desc}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <BsPersonCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="font-medium text-gray-900">
                {post.username}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <BsClock className="w-4 h-4" />
              <span className="text-sm">{new Date(post.updatedAt).toString().slice(16, 24)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePosts;