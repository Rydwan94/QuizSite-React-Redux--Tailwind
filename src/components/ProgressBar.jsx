import { useSelector } from "react-redux";

const ProgressBar = () => {
  const store = useSelector((store) => store.anwsersReducer);

  const { currentIndex, questions } = store;

  const progressBarWidth = (currentIndex / questions.length) * 100

  return (
    <div className="flex justify-center items-center self-end w-full  bg-white h-20">
      <div className="w-60 h-8  rounded-xl bg-[#EDE8E3] mx-4">
        <div style={{width: `${progressBarWidth}%`}} className= "bg-[#31CD63] rounded-xl h-full transition-all"></div>
      </div>
      <p>{currentIndex} / {questions.length}</p>
    </div>
  );
};

export default ProgressBar;
