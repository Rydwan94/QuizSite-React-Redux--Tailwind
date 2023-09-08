import { useState } from "react";

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
    <li onClick={handleHideMenu}
      className="font-monsterrat  text-gray-400 mx-3 p-2 rounded-md hover:bg-blue-500 hover:text-white hover:animate-wiggle transition-all max-lg:text-white"
      key={element.label}
    >
      <a href={element.path}>{element.label}</a>
    </li>
  ));

  return (
    <header className="absolute w-full py-3 max-lg:p-3 max-lg:bg-gradient-to-r from-cyan-300 to-blue-500">
      <nav className="flex justify-evenly items-center md:flex max-lg:flex-col max-lg:items-center">
        <Hamburger handleClick={handleClick} active={active} />
        <ul className={`flex max-lg:flex-col text-xl max-lg:overflow-hidden transition-[height] duration-700 ${active? "max-lg:h-40" : "max-lg:h-0"}`}>
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