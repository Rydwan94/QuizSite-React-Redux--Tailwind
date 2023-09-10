import { useState } from "react";
import { Link } from "react-scroll";
import { NavBar } from "../../constants";
import brand from "../../assets/images/brand.png";
import Hamburger from "../../components/Hamburger";

const Navbar = () => {
  const [active, isActive] = useState(false);

  const handleClick = () => {
    isActive(!active);
  };

  const handleHideMenu = () => {
    isActive(false)
  }

  const navList = NavBar.map((element) => (
    <li
      className="font-monsterrat cursor-pointer  text-gray-400 mx-3 p-2 rounded-md hover:bg-blue-500 hover:text-white hover:animate-wiggle transition-all max-lg:text-white"
      key={element.label}
    >
      <Link onClick={handleHideMenu} to={element.path} spy={true} smooth={true} offset={-50} duration={500}>{element.label}</Link>
    </li>
  ));

  return (
    <header className="absolute z-10 w-full py-3 max-lg:p-3 max-lg:bg-gradient-to-r from-cyan-300 to-blue-500">
      <nav className="flex justify-evenly items-center md:flex max-lg:flex-col max-lg:items-center">
        <Hamburger handleClick={handleClick} active={active} />
        <ul className={`flex max-lg:flex-col items-center text-xl max-lg:overflow-hidden transition-[height] duration-700 ${active? "max-lg:h-40" : "max-lg:h-0"}`}>
          <section className="max-lg:flex max-lg:justify-between">
            <img src={brand} alt="brand" />
          </section>
          {navList}
          <hr />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
