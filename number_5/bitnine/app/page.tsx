import DBEngineSection from "./components/DBEngineSection";
import EnterprisePackageSection from "./components/EnterprisePackageSection";
import EnterpriseSection from "./components/EnterpriseSection";
import Footer from "./components/Footer";
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
      <EnterprisePackageSection />
      <Footer />
    </div>
  );
}
