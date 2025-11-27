"use client";
import { useState } from "react";

export default function Home() {
  
  return (
    <main className="h-screen py-4 px-[50px] flex flex-col  items-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-400">Simple page test</h1>

      <p className="text-lg text-gray-600 mb-6">
        My minimal page project.
      </p>

      <button
        onClick={() => alert("Button Clicked!")}
        className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
      >
        Click Me
      </button>
    </main>
  );
}
