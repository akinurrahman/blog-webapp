import React from "react";
import Redirect from "../common/Redirect";

const NotFound = ({id}) => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">
          Blog Not Found
        </h2>
        <p className="text-gray-400 mb-4">
          The blog with ID <span className="font-semibold">{id}</span> is not
          available.
        </p>
        <Redirect href="/blogs" className="cursor-pointer">
          <a className="text-indigo-600 hover:text-indigo-800 text-lg">
            Back to Blogs
          </a>
        </Redirect>
      </div>
    </div>
  );
};

export default NotFound;
