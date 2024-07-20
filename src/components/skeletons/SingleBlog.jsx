import React from "react";

const SingleBlog = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-md min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <svg
          className="w-16 h-16 text-blue-500 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </div>
      <p className="text-xl font-semibold text-gray-800 animate-pulse">
        Loading Single Blog...
      </p>
      <p className="text-gray-500 mt-2">
        Please wait while we fetch the content.
      </p>
    </div>
  );
};

export default SingleBlog;
