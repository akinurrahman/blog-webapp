import Link from "next/link";

const AllBlogSkeleton = () => (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Our All Blogs
      </h2>
      <Link href="/publish-blog" className="flex justify-end">
        <button className="mb-6 px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105">
          Publish a Blog
        </button>
      </Link>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="relative p-6 border rounded-lg shadow-md bg-white animate-pulse"
          >
            <div className="h-6 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-1"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
           
          </div>
        ))}
      </div>
    </div>
  );
  
  export default AllBlogSkeleton;
  