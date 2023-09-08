
import Navbar from "../pages/HomePage/Navbar";
import Hero from "../pages/HomePage/Hero";
import Features from "../pages/HomePage/Features";
import LearningInfo from "../pages/HomePage/LearningInfo";
import Footer from "../pages/HomePage/Footer";
const LandingPage = () => {
  
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-40">
        <Hero/>
        <Features />
        <LearningInfo />
      </main>
      <Footer/>
      {/* <Link to="/">Landing Page</Link> */}
    </div>
  );
};

export default LandingPage;