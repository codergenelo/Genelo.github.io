"use client";

import { useState } from "react";

type Blog = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  tag: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Web development is evolving fast with AI, new frameworks, and better performance tools. Learn what’s coming next.",
    author: "Genelo Tech",
    date: "May 21, 2026",
    tag: "Technology",
  },
  {
    id: 2,
    title: "Building Modern UI with React & Tailwind",
    description:
      "A guide to building clean, responsive, and modern user interfaces using React and Tailwind CSS.",
    author: "UI Team",
    date: "May 21, 2026",
    tag: "Design",
  },
  {
    id: 3,
    title: "Why TypeScript is Important in 2026",
    description:
      "TypeScript helps developers write safer and scalable applications. Here’s why you should use it.",
    author: "Dev Insights",
    date: "May 21, 2026",
    tag: "Programming",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          📰 Tech Blog Hub
        </h1>
        <p className="text-gray-400 mt-3">
          Latest articles, tutorials, and insights in web development
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full md:w-2/3 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:scale-[1.02] transition-transform shadow-lg"
          >
            <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
              {blog.tag}
            </span>

            <h2 className="text-xl font-semibold mt-3">{blog.title}</h2>

            <p className="text-gray-400 mt-2 text-sm">
              {blog.description}
            </p>

            <div className="mt-4 text-xs text-gray-500 flex justify-between">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>

            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-xl text-sm font-medium">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-16 text-sm">
        © {new Date().getFullYear()} Tech Blog Hub. All rights reserved.
      </footer>
    </div>
  );
    }
