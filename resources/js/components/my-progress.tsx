"use client"

import * as React from "react"

export function MyProgress() {

  return (
    <div className="max-w-2xl mx-auto bg-white ">
        <div className="flex items-center gap-4">
            <hr className="h-2 w-15 bg-blue-900" />
        <h2 className="text-blue-900 uppercase text-sm">About Us</h2>
        </div>

        <h1 className="text-3xl font-bold mt-2">We Are Increasing Business Success With Technology</h1>
        <p className="text-gray-600 mt-3">Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.</p>

        <div className="mt-6 space-y-5">
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Software Development</span>
                    <span className="font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-300 h-2">
                    <div className="bg-blue-900 h-2 " style={{ width: '92%' }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Cyber Security</span>
                    <span className="font-bold">80%</span>
                </div>
                <div className="w-full bg-gray-300 h-2">
                    <div className="bg-blue-900 h-2 " style={{ width: '80%' }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Artificial Intelligence</span>
                    <span className="font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-300 h-2">
                    <div className="bg-blue-900 h-2 " style={{ width: '95%' }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Web Development</span>
                    <span className="font-bold">78%</span>
                </div>
                <div className="w-full bg-gray-300 h-2">
                    <div className="bg-blue-900 h-2 " style={{ width: '78%' }}></div>
                </div>
            </div>
        </div>

        <div className="mt-6">
            <button className="bg-gradient text-white px-6 py-2 rounded-full font-semibold text-lg">Learn More</button>
        </div>
    </div>
  )
}
