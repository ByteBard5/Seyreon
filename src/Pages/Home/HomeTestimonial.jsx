import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const TESTIMONIAL_API =
  "https://script.google.com/macros/s/AKfycbz0GDy8-uYv9O9Q5UbclIxF3NQC6n_GS2OrLAFX-t0f_sh_5NA5osjgiBZG1b6nq6fl/exec";

// Get thumbnail image from Google Drive link
const getDriveThumbnail = (url) => {
  const match = url.match(/\/d\/(.+?)\//);
  return match
    ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w100`
    : url;
};

const HomeTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch(TESTIMONIAL_API)
      .then((res) => res.json())
      .then((data) => {
        const published = data.filter((item) => item.Status === "Published");
        setTestimonials(published);
      })
      .catch((err) => console.error("Error fetching testimonials", err));
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <section className="bg-[#1b1b29] py-24 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          What Our Clients Say
        </h3>

        {/* Scroll container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#1b1b29] via-[#1b1b29]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#1b1b29] via-[#1b1b29]/80 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex gap-6 animate-slideLeft w-max">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index % testimonials.length)}
                className="flex-shrink-0 w-72 p-5 bg-[#11111c]/80 rounded-xl 
                  backdrop-blur-md shadow-lg shadow-purple-700/20 cursor-pointer 
                  hover:scale-[1.03] transition-transform duration-300 hover:shadow-purple-500/30 relative z-10"
              >
                <img
                  src={getDriveThumbnail(item["Client Image"])}
                  alt="Client"
                  className="w-14 h-14 rounded-full object-cover mb-3 border border-purple-500/30"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/48?text=Img")
                  }
                />
                <h4 className="text-white font-semibold text-sm mb-1">
                  {item["Client Name"]}
                </h4>
                <p className="text-sm text-gray-300 mb-3 line-clamp-4">
                  {item["Client Testimonial"]}
                </p>
                <div className="flex gap-[2px]">
                  {[...Array(Number(item["Stars"]))].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 w-4 h-4 fill-yellow-400 animate-bounceStar"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#1a1a2a] max-w-md w-full p-6 rounded-2xl text-white relative animate-scalePop"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-sm text-gray-400 hover:text-white"
            >
              Close ✕
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={getDriveThumbnail(
                  testimonials[activeIndex]["Client Image"]
                )}
                alt="Client"
                className="w-16 h-16 rounded-full object-cover border border-purple-400"
              />
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">
                  {testimonials[activeIndex]["Client Name"]}
                </h4>
                <div className="flex gap-[2px]">
                  {[...Array(Number(testimonials[activeIndex]["Stars"]))].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 w-5 h-5 fill-yellow-400 animate-bounceStar"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {testimonials[activeIndex]["Client Testimonial"]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeTestimonial;
