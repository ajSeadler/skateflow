import HeroSection from "../components/HeroSection";
import About from "./About";

const Home = () => {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white">
      <HeroSection />
      <About />
    </main>
  );
};

export default Home;
