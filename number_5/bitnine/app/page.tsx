import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="mt-20 min-h-screen">
      {" "}
      <Navbar />
      <HeaderSection />
    </div>
  );
}
