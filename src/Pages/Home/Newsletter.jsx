import React, { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

const NEWSLETTER_API =
  "https://script.google.com/macros/s/AKfycbw41Vq7J7rbH7p2xxblaTQK0-QF-i2EWN1rM8IG07UdSiWespSZU9XGe19ogL1OcDi2/exec";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [dustActive, setDustActive] = useState(false);
  const [buttonX, setButtonX] = useState(0);
  const [buttonFade, setButtonFade] = useState(false);

  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (animating && buttonRef.current && formRef.current) {
      const formWidth = formRef.current.offsetWidth;
      setButtonX(-formWidth + 60);
    } else {
      setButtonX(0);
    }
  }, [animating]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/@/.test(email)) {
      setStatus("invalid");
      return;
    }

    setAnimating(true);
    setDustActive(true);

    // Step 1: Slide and emit dust
    setTimeout(() => {
      setButtonFade(true); // Step 2: Fade button
    }, 1600);

    // Step 3: Submit form + reset
    setTimeout(async () => {
      const formData = new FormData();
      formData.append("email", email);

      try {
        const response = await fetch(NEWSLETTER_API, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (result.status === "success") {
          setStatus("success");
          setEmail("");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Newsletter error:", err);
        setStatus("error");
      }

      setAnimating(false);
      setDustActive(false);
      setButtonFade(false);
      setButtonX(0);
    }, 3000);
  };

  return (
    <section className="bg-[#1b1b29] py-20 text-white px-6">
      <div className="max-w-xl mx-auto text-center animate-scaleIn">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          Join Our Newsletter
        </h3>
        <p className="text-gray-400 mb-10 text-base md:text-lg">
          We don’t spam. We don’t sell your data. Just pure automation goodness.
        </p>

        <div className="w-full max-w-xl mx-auto min-h-[60px]">
          {!status && (
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="w-full flex items-center gap-2"
            >
              {/* Input */}
              <input
                type="email"
                value={email}
                required
                disabled={animating}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={clsx(
                  "px-6 py-3 w-full rounded-full bg-white/10 text-white placeholder:text-gray-400 outline-none backdrop-blur-md transition-all duration-500",
                  animating && "opacity-0 scale-95 blur-sm"
                )}
              />

              {/* Button */}
              <div
                ref={buttonRef}
                style={{ transform: `translateX(${buttonX}px)` }}
                className={clsx(
                  "transition-transform duration-[1600ms] ease-in-out z-20 relative",
                  buttonFade &&
                    "opacity-0 scale-90 transition-opacity duration-1000"
                )}
              >
                <button
                  type="submit"
                  disabled={animating}
                  className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg relative z-30"
                >
                  Subscribe
                </button>

                {/* Dust Trail */}
                {dustActive && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-[6px] h-[6px] absolute rounded-full animate-dustTrail mix-blend-screen"
                        style={{
                          backgroundColor: `hsl(${
                            200 + Math.random() * 120
                          }, 100%, 75%)`,
                          top: `${Math.random() * 24 - 12}px`,
                          left: `${Math.random() * 40 - 20}px`,
                          animationDelay: `${i * 0.06}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </form>
          )}

          {status === "success" && (
            <div className="flex justify-center items-center gap-2 mt-6 animate-fadeIn">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p className="text-green-400 text-lg">
                You're now part of the Seyreon family!
              </p>
            </div>
          )}

          {status === "error" && (
            <p className="text-red-400 mt-4 animate-fadeIn">
              Something went wrong. Please try again.
            </p>
          )}

          {status === "invalid" && (
            <p className="text-yellow-400 mt-4 animate-fadeIn">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
