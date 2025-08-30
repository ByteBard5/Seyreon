import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import WelcomeMessage from "./WelcomeMessage";
import ProjectOverview from "./ProjectOverview";
import DeliverablesList from "./DeliverablesList";
import ProjectStartDate from "./ProjectStartDate";
import Deadline from "./Deadline";
import ProjectStatusBadge from "./ui/ProjectStatusBadge";
import PaymentStatusBox from "./ui/PaymentStatusBox";
import ExternalLinks from "./ExternalLinks";
import ClientNoteBox from "./ClientNoteBox";
import ClientNoteForm from "./ClientNoteForm";

function normalizeKeys(obj) {
  const newObj = {};
  for (const key in obj) {
    newObj[key.trim().toLowerCase()] = obj[key];
  }
  return newObj;
}

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const clientData = location.state?.clientData;

  const [noteUpdated, setNoteUpdated] = React.useState(false);

  const handleNoteAdded = () => {
    setNoteUpdated((prev) => !prev); // Toggle to trigger refresh
  };

  React.useEffect(() => {
    if (!clientData) {
      navigate("/portal");
    }
  }, [clientData, navigate]);

  if (!clientData) return null;

  const normalizedData = normalizeKeys(clientData);

  return (
    <div className="bg-[#12121c] text-white">
      <WelcomeMessage
        name={normalizedData["name"] || "Client"}
        projectStatus={normalizedData["status"] || ""}
      />

      <ProjectOverview summary={normalizedData["project summary"] || ""} />

      <DeliverablesList deliverables={normalizedData["deliverables"] || ""} />

      <ProjectStartDate date={normalizedData["project start date"] || ""} />

      <Deadline date={normalizedData["deadline"] || ""} />

      <ProjectStatusBadge
        projectStatus={normalizedData["project status"] || 0}
      />

      <PaymentStatusBox
        paymentStatus={normalizedData["payment status"] || ""}
      />

      <ExternalLinks
        notion={normalizedData["notion portal"] || ""}
        drive={normalizedData["google drive folder"] || ""}
      />

      <ClientNoteBox
        clientId={normalizedData["client id"] || ""}
        refreshTrigger={noteUpdated}
      />

      <ClientNoteForm
        clientId={normalizedData["client id"] || ""}
        onNoteAdded={handleNoteAdded}
      />
    </div>
  );
};

export default Dashboard;
