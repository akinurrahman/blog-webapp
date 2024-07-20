"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { deleteBlogFromTheServer } from "@/app/utils/ServerActions";
import { toast } from "react-toastify";

const DeleteBlog = ({ id }) => {
  const handleDelete = async () => {
    let toastId;
    try {
      toastId = toast.loading("Deleting Blog");
      await deleteBlogFromTheServer(id);
      toast.success("Blog Deleted Succesfully");
    } catch (error) {
      console.error("Failed to delete blog", error);

    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className={`absolute top-4 right-4 text-red-500 hover:text-red-700 focus:outline-none `}
    >
      <FaTrash size={15} />
    </button>
  );
};

export default DeleteBlog;
