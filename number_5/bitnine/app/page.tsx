import DBEngineSection from "./components/DBEngineSection";
import EnterpriseSection from "./components/EnterpriseSection";
import HeaderSection from "./components/HeaderSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="mt-20 min-h-screen">
      {" "}
      <Navbar />
      <HeaderSection />
      <EnterpriseSection />
      <KeyFeaturesSection />
      <DBEngineSection />
    </div>
  );
}
