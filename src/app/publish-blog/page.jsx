"use client";
import React, {  useState } from "react";
import TextEditor from "@/components/TextEditor";
import { addBlogToServer } from "../utils/ServerActions";
import { toast } from "react-toastify";
import RedirectButton from "@/components/common/Redirect";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(content);

  const handlePublish = async () => {
    let toastId;
    try {
      toastId = toast.loading("Adding Blog to the Server");
      await addBlogToServer(title, content);
      toast.success("Blog published successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      toast.error("Failed to publish blog: " + error.message);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4">Add a New Blog</h1>
        <RedirectButton href="/blogs">
          <button className="mb-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-transform transform hover:scale-105 text-nowrap w-full sm:w-auto">
            All Blogs
          </button>
        </RedirectButton>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className=" h-[500px] mb-4 ">
        <TextEditor setContent={setContent} />
      </div>
      <button
        onClick={handlePublish}
        className="bg-blue-700 px-4 py-2 rounded-md text-white font-bold"
      >
        Publish Blog
      </button>
    </div>
  );
};

export default AddBlog;
