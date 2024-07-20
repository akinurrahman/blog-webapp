// pages/not-found.js

import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
        <p className="mt-2 text-lg text-gray-700">The Page you are looking for does not exist.</p>
        <Link href="/" >
          <div className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 rounded-md">Go Back Home</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
