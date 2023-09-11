import { answer } from "../actions/actions";
import { useDispatch } from "react-redux";

const Button = ({ index,message, letter }) => {
  const dispatch = useDispatch();

  const handleAnswerClick = () => {
    dispatch(answer(index));
  };

  return (
    <button
      onClick={handleAnswerClick}
      className=" relative flex items-center  bg-white text-black text-2xl max-md:text-xl rounded-md py-2 w-full hover:transform focus:bg-[#31CD63] hover:scale-105 transition-all "
    >
      <span className="basis-[150px] max-md:basis-[100px] font-monsterrat  text-blue">{letter}</span>
      <span className="basis-3/4 text-start ">{message}</span>
    </button>
  );
};
export default Button;
