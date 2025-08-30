import React, { useEffect, useState } from "react";
import { fetchClientNotes } from "./clientNotes";
import { motion } from "framer-motion";

const ClientNoteBox = ({ clientId, refreshTrigger }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotes() {
      setLoading(true);
      const result = await fetchClientNotes(clientId);
      setNotes(result);
      setLoading(false);
    }

    if (clientId) {
      loadNotes();
    }
  }, [clientId, refreshTrigger]);

  return (
    <section className="bg-[#1b1b29] text-white px-6 pb-20 pt-0 w-full">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading with shimmer */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          Your Previous Notes
        </motion.h2>

        {/* Notes list */}
        {loading ? (
          <p className="text-gray-400">Loading notes...</p>
        ) : notes.length === 0 ? (
          <p className="text-gray-500 italic">No notes submitted yet.</p>
        ) : (
          <ul className="space-y-4 text-left">
            {notes.map((note, index) => (
              <li
                key={index}
                className="bg-[#2d2d44] rounded-xl p-4 border border-[#444] shadow-sm"
              >
                <div className="text-sm text-gray-400 mb-1">
                  🕒 {note.timestamp}
                </div>
                <div className="text-base text-white whitespace-pre-wrap">
                  {note.message}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ClientNoteBox;
