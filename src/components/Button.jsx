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
      className=" relative bg-white text-black text-4xl max-md:text-2xl rounded-md py-2 w-full hover:transform hover:bg-[#31CD63] hover:scale-105 transition-all "
    >
      <span className="font-monsterrat w absolute left-20 text-blue">{letter}</span>
      <span >{message}</span>
    </button>
  );
};
export default Button;
