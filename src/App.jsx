import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// ✅ Custom Hook for Smooth Scroll
import { useLenis } from "./hooks/useLenis";

// ✅ CSS
import "./components/GlowingButton.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import N8nChatWidget from "./components/N8nChatWidget";
import PreLoader from "./components/PreLoader"; // 🔥 Added PreLoader

// Pages
import Home from "./Pages/Home/home";
import Services from "./Pages/Services/Services";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contacts/Contact";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/Blog/SingleBlog";

// Service Detail Pages
import AIAssistant from "./Pages/Services/AIAssistant";
import BusinessAutomation from "./Pages/Services/BusinessAutomation";
import GrowthEngines from "./Pages/Services/GrowthEngines";
import CustomSystems from "./Pages/Services/CustomSystems";

// Legal Pages
import WhyUs from "./Pages/Legal/WhyUs";
import PrivacyPolicy from "./Pages/Legal/PrivacyPolicy";
import TermsAndConditions from "./Pages/Legal/TermsAndConditions";

// ✅ Client Portal Page
import LoginPage from "./Pages/ClientPortal/LoginPage/index.jsx";
import DashboardPage from "./Pages/ClientPortal/DashboardPage/index.jsx";

// ✅ ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ✅ AppWrapper Component
const AppWrapper = () => {
  const location = useLocation();
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  // 🔥 New state for preloader
  const [loading, setLoading] = useState(true);

  // ✅ Activate Lenis scroll
  useLenis();

  useEffect(() => {
    // ✅ Always show header/footer on all routes
    setShowHeaderFooter(true);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <PreLoader onFinish={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen text-white overflow-x-hidden bg-[#0e0e0e] relative">
          <ScrollToTop />
          {showHeaderFooter && <Header />}
          <div className={showHeaderFooter ? "pt-20" : ""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/ai-assistant" element={<AIAssistant />} />
              <Route
                path="/services/business-automation"
                element={<BusinessAutomation />}
              />
              <Route
                path="/services/growth-engines"
                element={<GrowthEngines />}
              />
              <Route
                path="/services/custom-systems"
                element={<CustomSystems />}
              />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />

              {/* ✅ Client Portal Login */}
              <Route path="/client-portal/login" element={<LoginPage />} />
              <Route path="/portal/dashboard" element={<DashboardPage />} />
            </Routes>
          </div>
          {showHeaderFooter && <Footer />}

          {/* ✅ Chat widget always mounted */}
          <N8nChatWidget />
        </div>
      )}
    </>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
