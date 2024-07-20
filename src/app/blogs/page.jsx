import DeleteBlog from "@/components/client/DeleteBlog";
import { FaEdit } from "react-icons/fa";
import Redirect from "@/components/common/Redirect";
import React from "react";
import { fetchAllBlogs } from "../utils/ServerActions";



const Blogs = async () => {
  const blogs = await fetchAllBlogs();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen ">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Our All Blogs
      </h2>

      <Redirect href="/publish-blog" className="flex justify-end">
        <button className="mb-6 px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 ">
          Publish a Blog
        </button>
      </Redirect>
ss
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs &&
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative p-6 border rounded-lg shadow-md bg-white transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-3 text-gray-800">
                {blog?.title}
              </h2>
              <p className="text-gray-600 mb-1">Blog Id: {blog.id}</p>
              <p className="text-gray-600 mb-3">
                Posted on {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <Redirect href={`/blogs/${blog.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Read Blog
                </button>
              </Redirect>

              <Redirect href={`/update-blog/${blog.id}`}>
                <button
                  className={`absolute top-4 right-10 text-gray-500 hover:text-gray-700 focus:outline-none `}
                >
                  <FaEdit size={17} />
                </button>
              </Redirect>
              <DeleteBlog id={blog.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
