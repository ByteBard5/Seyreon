import React from "react";

const statusStyles = {
  Development: "bg-yellow-600 text-yellow-100",
  Testing: "bg-blue-600 text-blue-100",
  Live: "bg-green-600 text-green-100",
  Closed: "bg-gray-600 text-gray-100",
  Default: "bg-gray-700 text-gray-300",
};

const PhaseTag = ({ phase }) => {
  const style = statusStyles[phase] || statusStyles.Default;

  return (
    <span className={`text-sm px-3 py-1 rounded-full font-medium ${style}`}>
      {phase}
    </span>
  );
};

export default PhaseTag;
