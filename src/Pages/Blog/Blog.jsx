import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwpN3e-dV_QcDndC0eL-2wX1H58N2Y4emwqLgjPHLB3gAVyHXd7yQJbCOrU8Zop4Tkb/exec";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(WEB_APP_URL)
      .then((res) => {
        const publishedBlogs = res.data;
        setBlogs(publishedBlogs);
        setFilteredBlogs(publishedBlogs);

        const extractedCategories = publishedBlogs
          .map((b) => b.category?.trim())
          .filter((cat) => !!cat);

        const uniqueCategories = ["All", ...new Set(extractedCategories)];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error loading blogs", err));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterBlogs(searchQuery, category);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterBlogs(query, selectedCategory);
  };

  const filterBlogs = (query, category) => {
    let filtered = blogs;

    if (category !== "All") {
      filtered = filtered.filter(
        (b) => b.category?.trim().toLowerCase() === category.toLowerCase()
      );
    }

    if (query.trim() !== "") {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.subtitle?.toLowerCase().includes(q) ||
          b.content?.toLowerCase().includes(q)
      );
    }

    setFilteredBlogs(filtered);
  };

  const handleCardClick = (blog) => {
    const encodedId = encodeURIComponent(blog.title); // you can use blog.id if it exists
    navigate(`/blog/${encodedId}`, { state: { blog } });
  };

  return (
    <div className="-mt-[100px] bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] min-h-screen text-white">
      {/* HERO SECTION */}
      <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-6 overflow-visible">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Insights from the Seyreon Team
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            We share lessons, breakthroughs, and behind-the-scenes from building
            AI, automations, and the future of business tech.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER SECTION */}
      <section className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Categories Sidebar */}
        <div className="relative z-20">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => handleCategorySelect(cat)}
                className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#333]"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Blog Cards */}
        <div className="md:col-span-3 relative z-20">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 mb-8 rounded-md border border-purple-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 relative z-20"
          />

          {filteredBlogs.length === 0 ? (
            <p className="text-gray-400 mt-4">No blogs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, i) => (
                <div
                  key={i}
                  onClick={() => handleCardClick(blog)}
                  className="bg-[#1a1a1a]/60 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-1">{blog.title}</h3>
                  <p className="italic text-purple-400 mb-2">{blog.subtitle}</p>
                  <p className="text-sm text-gray-400">
                    {blog.author ? `By ${blog.author}` : ""} |{" "}
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
