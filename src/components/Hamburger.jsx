
const Hamburger = ({handleClick, active}) => {

  return (
    <div onClick={handleClick} className="cursor-pointer max-md:self-end md:self-end lg:hidden">
      <div
        className={`w-10 my-1 h-1.5 bg-white rounded-lg origin-left ${
          active
            ? "transition-[transform] duration-500 -translate-x-1 -translate-y-2 rotate-45"
            : "transition-[transform] duration-500 translate-x-0 rotate-0"
        }`}
      ></div>
      <div
        className={`w-10 my-1 h-1.5 bg-white rounded-lg ${
          active
            ? "opacity-0 transition-[opacity] duration-500"
            : "opacity-100 transition-[opacity] duration-500"
        }`}
      ></div>
      <div
        className={`w-10 my-1 h-1.5 bg-white rounded-lg origin-left ${
          active
            ? "transition-[transform] duration-500 -translate-x-1 -rotate-45"
            : "transition-[transform] duration-500 translate-x-0 rotate-0"
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
