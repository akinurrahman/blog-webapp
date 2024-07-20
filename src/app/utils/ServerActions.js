"use server";

import { revalidateTag } from "next/cache";

export const fetchAllBlogs = async () => {
  try {
    const res = await fetch(
      "https://6696b8be0312447373c38653.mockapi.io/blogs",
      {
        next: {
          tags: ["blog"],
        },
      }
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return await res.json();
  } catch (error) {
    console.error("Failed Fetching Blogs", error);
    return null;
  }
};

export const getSingleBlog = async (id) => {
  const apiUrl = `https://6696b8be0312447373c38653.mockapi.io/blogs/${id}`;
  try {
    const res = await fetch(apiUrl, {
      next: {
        tags: ["update"],
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const blog = await res.json();
    return blog;
  } catch (error) {
    console.error("Failed Fetching Blog", error);
    return null;
  }
};

export const addBlogToServer = async (title, content) => {
  try {
    const response = await fetch(
      "https://6696b8be0312447373c38653.mockapi.io/blogs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to publish blog");
    }

    const data = await response.json();

    revalidateTag("blog");

    return data;
  } catch (error) {
    console.error("An error occurred while publishing the blog:", error);
    throw error;
  }
};

export async function updateBlogToServer(id, title, content) {
  const url = `https://6696b8be0312447373c38653.mockapi.io/blogs/${id}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  if (!response.ok) {
    throw new Error("Failed to update the blog");
  }

  const data = await response.json();
  revalidateTag("update");
  return data;
}

export const deleteBlogFromTheServer = async (id) => {
  await fetch(`https://6696b8be0312447373c38653.mockapi.io/blogs/${id}`, {
    method: "DELETE",
  });
  revalidateTag("blog");
  revalidateTag("update");
};
