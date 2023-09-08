import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-homepage bg-cover animate-intro min-h-screen w-full bg-black grid place-items-center text-white">
      <Link to="/home" className="animate-rotate-x font-serif-fancy text-4xl max-lg:text-lg text-black uppercase">go to HomePage</Link>
    </div>
  );
};

export default HomePage;