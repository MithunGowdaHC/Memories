import React from 'react'

const ProfilePosts = () => {
    return (
        <div className="w-full flex flex-col md:flex-row mt-6 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full md:w-1/3 h-40 md:h-auto">
                <img 
                    src="https://images.unsplash.com/photo-1730650352721-5f88c64d3394?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    className="h-full w-full object-cover" 
                    alt="Blog Thumbnail"
                />
            </div>
            <div className="flex flex-col w-full p-4">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">10 Best places to visit in India</h1>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <p>@midev</p>
                    <div className="flex space-x-2">
                        <p>{new Date().toDateString()}</p>
                        <p>9:50</p>
                    </div>
                </div>
                <p className="text-sm md:text-md text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam animi odit est dignissimos veritatis corrupti excepturi? Accusamus earum fugiat quidem.
                </p>
            </div>
        </div>
    );
}

export default ProfilePosts