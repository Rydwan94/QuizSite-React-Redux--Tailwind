import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex justify-center items-start pt-36 min-h-screen w-full bg-landingPage bg-cover bg-center  max-sm:bg-left">
      <div className="flex justify-center items-center w-[600px] h-80 max-sm:w-56 max-sm:h-40   shadow-2xl rounded-full animate-wiggle-more">

      <Link to="/home" className="font-allerta  font-serif-fancy text-4xl max-lg:text-lg lg:text-4xl text-gray-600 uppercase animate-jump animate-delay-1000">go to HomePage</Link>
      </div>
    </div>
  );
};

export default HomePage;