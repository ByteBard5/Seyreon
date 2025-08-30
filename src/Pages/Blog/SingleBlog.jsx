import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded"
            onClick={() => navigate("/blog")}
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] text-white px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => navigate("/blog")}
          className="text-purple-400 hover:text-purple-300 mb-4"
        >
          ← Back to Blog
        </button>

        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="italic text-purple-400 text-lg">{blog.subtitle}</p>
        <p className="text-sm text-gray-400">
          {blog.author ? `By ${blog.author}` : ""} |{" "}
          {new Date(blog.date).toLocaleDateString()}
        </p>

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default SingleBlog;
