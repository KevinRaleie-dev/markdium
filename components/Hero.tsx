import React from 'react'

export const Hero = () => {
  return (
    <div className="grid place-items-center space-y-5 mt-10">
        <h1 className=" text-9xl font-black ">
            mark<span className="font-light">Dium</span>.
        </h1>
        <div className="space-y-5 grid place-items-center">
            <p className="text-3xl font-bold">
                Discover and share stories that matter to you
            </p>
            <p className="font-light text-gray-600 text-lg">
                Sign up today to start reading and journaling.
            </p>
            <button
            className="py-3 px-8 bg-black text-white font-medium">
                Get Started
            </button>
        </div>
    </div>
  )
}
