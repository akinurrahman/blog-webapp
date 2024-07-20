import { getSingleBlog } from "@/app/utils/ServerActions";
import NotFound from "@/components/blog/NotFound";
import Redirect from "@/components/common/Redirect";
import React from "react";

const SingleBlog = async ({ params }) => {
  const blog = await getSingleBlog(params.id);

  // Function to check if content contains HTML tags
  const isHtmlContent = (content) => /<[^>]+>/.test(content);

  return (
    <div className="max-w-4xl mx-auto shadow-lg">
      {blog ? (
        <div className="bg-white p-8 rounded-md min-h-screen">
          {/* Render content based on type */}
          <div className="text-gray-700 leading-relaxed mb-6 overflow-x-hidden">
            {blog.content ? (
              isHtmlContent(blog.content) ? (
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {blog.title}
                  </h2>
                  <p>{blog.content}</p>
                </>
              )
            ) : (
              <div>No content available</div>
            )}
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </span>
            <Redirect
              href="/blogs"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Read more articles
            </Redirect>
          </div>
        </div>
      ) : (
      <NotFound id={params.id}/>
      )}
    </div>
  );
};

export default SingleBlog;
