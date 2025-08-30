const InfoSection = () => {
  return (
    <div className="relative z-20 bg-gradient-to-b from-transparent via-[#1b1b29] to-[#1b1b29] text-white px-6 pb-20 pt-0 -mt-1">
      <section className="relative z-30 max-w-4xl mx-auto text-center bg-[#1b1b29]/80 backdrop-blur-sm p-6 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Your Dedicated Project Hub
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-300">
          This secure Client Portal is built exclusively for Seyreon clients to
          access real-time updates and key information about their ongoing
          projects. Whether you're tracking progress, reviewing deliverables, or
          checking your timeline — everything is available in one place.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-gray-300">
          As a client, you’ll be able to view your project summary, deadlines,
          payment status, shared links (Notion, Google Drive, Portal page), and
          any important updates posted by our team — all updated live.
        </p>
        <p className="text-lg leading-relaxed font-medium text-white mt-6">
          To continue, log in using your unique{" "}
          <span className="text-cyan-400">Client ID</span> and your registered{" "}
          <span className="text-cyan-400">Password</span>.
        </p>
      </section>
    </div>
  );
};

export default InfoSection;
