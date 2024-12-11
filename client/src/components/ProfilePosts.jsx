import React from 'react'
import { IF } from '../url';

const ProfilePosts = ({p}) => {
    return (
        <div className="w-full flex flex-col md:flex-row mt-6 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full md:w-1/3 h-40 md:h-auto">
                <img 
                    src={IF + p.photo} 
                    className="h-full w-full object-cover" 
                    alt="Blog Thumbnail"
                />
            </div>
            <div className="flex flex-col w-full p-4">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">{p.title}</h1>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <p>{p.username}</p>
                    <div className="flex space-x-2">
                    <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
                    <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>
                    </div>
                </div>
                <p className="text-sm md:text-md text-gray-600">
                    {p.desc}
                </p>
            </div>
        </div>
    );
}

export default ProfilePosts