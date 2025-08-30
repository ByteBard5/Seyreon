import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import LoginForm from "./LoginForm";

const ClientPortalLoginPage = () => {
  return (
    <div className="relative text-white pt-0 overflow-hidden bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] -mt-[80px]">
      <HeroSection />
      <InfoSection />
      <LoginForm />
    </div>
  );
};

export default ClientPortalLoginPage;
