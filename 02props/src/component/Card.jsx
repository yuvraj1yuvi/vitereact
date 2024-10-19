import React from 'react'

function Card({name="prince pal"}) {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
          <img
            src="src\assets\WhatsApp Image 2024-10-08 at 10.32.10 PM.jpeg"
            alt="no image"
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                soluta amet corporis accusantium aliquid consectetur eaque!
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
              Read more
            </button>
          </div>
        </div>
  )
}

export default Card