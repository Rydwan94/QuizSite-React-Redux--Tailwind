import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RESET_INDEX } from "../../actions/actions";

import scoreImg from "../../assets/images/scoreImg.png";
import scoreIcone from "../../assets/icons/scoreIcone.png";
import checkIcone from "../../assets/icons/checkIcone.png";

const ScoreInfo = () => {
  const store = useSelector((state) => state.anwsersReducer);

  const { score, correctAnwsers, questions } = store;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleButton = () => {
    navigate("/home");
    dispatch({ type: RESET_INDEX });
  };


  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center max-md:px-10 animate-jump-in max-sm:animate-jump">
      <img src={scoreImg} alt="scoreImg" />
      <h2 className="font-monsterrat text-8xl max-md:text-4xl py-10">
        Result of fantasy Quiz
      </h2>
      <div className="flex justify-between items-center px-10 max-sm:px-2 h-24 w-[500px] max-sm:w-full bg-white text-black rounded-xl mb-5">
        <img src={scoreIcone} alt="" />
        <p className="text-2xl font-monsterrat ">Score Gained</p>
        <p className="text-2xl font-semibold ">{score}</p>
      </div>
      <div className="flex justify-between items-center px-10 max-sm:px-2 h-24 w-[500px] max-sm:w-full bg-white text-black rounded-xl">
        <div className="flex justify-center items-center  w-9 h-9 bg-[#EDE8E3] rounded-full">
          <img src={checkIcone} alt="checkIcone" />
        </div>
        <p className="text-2xl font-monsterrat">Correct</p>
        <p className="text-2xl font-semibold ">{correctAnwsers} / {questions.length}</p>
      </div>
      <button
        className="font-monsterrat mt-10 w-80 h-20 rounded-2xl bg-[#31CD63] text-white hover:transform hover:scale-110 transition-[transform] "
        onClick={handleButton}
      >
        OK
      </button>
    </div>
  );
};

export default ScoreInfo;
