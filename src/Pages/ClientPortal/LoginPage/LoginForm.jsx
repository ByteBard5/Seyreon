import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkClientLogin } from "./../clientData";

const LoginForm = () => {
  const [clientId, setClientId] = useState("");
  const [credential, setCredential] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = await checkClientLogin(clientId, credential);

    setLoading(false);

    console.log("Login returned client data:", data); // Debug: check data

    if (data) {
      navigate("/portal/dashboard", { state: { clientData: data } });
    } else {
      setError("❌ Try again, Client ID or the Password is wrong.");
    }
  };

  return (
    <div className="bg-[#1b1b29] text-white px-6 py-20 -mt-8">
      <section className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold text-center text-purple-300 mb-2">
            Client Login
          </h3>
          <p className="text-center text-gray-400 text-sm mb-4">
            Enter your <span className="text-white font-medium">Client ID</span>{" "}
            and <span className="text-white font-medium">Password</span> to
            access your portal.
          </p>

          <input
            type="text"
            placeholder="Client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
            className="w-full p-3 rounded-xl bg-[#22223a] text-white border border-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />

          <input
            type="text"
            placeholder="Password"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            className="w-full p-3 rounded-xl bg-[#22223a] text-white border border-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />

          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 p-3 rounded-xl text-white font-semibold shadow-md hover:shadow-purple-500/30 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
