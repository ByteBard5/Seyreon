import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaReddit,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a0f] via-[#10101b] to-[#181824] text-white pt-16">
      {/* CTA Section */}
      <div className="text-center px-6 pb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
          Let’s Build Your AI System
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Ready to automate and scale? Just Say It.
        </p>
        <Link to="/contact">
          <button className="relative px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-purple-500/50">
            Contact Us
            <span className="absolute inset-0 bg-purple-500 opacity-10 blur-xl animate-pulse -z-10 rounded-lg" />
          </button>
        </Link>
      </div>

      {/* Divider Glow */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-transparent to-purple-500 blur-sm opacity-60" />

      {/* Footer Content */}
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto text-sm">
        {/* Logo + Contact Info */}
        <div className="space-y-4">
          <Link to="/">
            <img
              src="/FooterLogo.png"
              alt="Seyreon Logo"
              className="h-[34px] w-auto"
            />
          </Link>
          <p className="text-gray-400">Your AI Automation Partner</p>
          <div className="flex items-start space-x-2 text-gray-400">
            <FaMapMarkerAlt className="mt-1" />
            <span>India, Delhi</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-400">
            <FaEnvelope className="mt-1" />
            <span>support@seyreon.com</span>
          </div>
          <div className="flex items-start space-x-2 text-gray-400">
            <FaPhoneAlt className="mt-1" />
            <span>+91 6398800516</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/why-us">Why Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
          <div className="flex flex-wrap space-x-4 text-purple-400 text-xl">
            <a
              href="https://www.linkedin.com/company/seyreon/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/seyreon/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/seyreon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.reddit.com/user/seyreon/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaReddit />
            </a>
            <a
              href="https://x.com/seyreon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="http://wa.me/+916398800516"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} Seyreon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
