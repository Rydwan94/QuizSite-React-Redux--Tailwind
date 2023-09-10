import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from '../../components/Button'
import ScoreInfo from "./ScoreInfo";

const QuestionContainer = () => {
  const data = useSelector((state) => state.anwsersReducer);

  const { questions, currentIndex} = data;
  if(currentIndex < 3){
  return (
    <div className="max-w-[1100px] flex flex-col items-center  w-full py-10">
      <h2 className="font-monsterrat text-center mb-2 pb-20 text-8xl max-md:text-4xl">{questions[currentIndex].question}</h2>
      <div className="flex flex-col gap-4 w-full">
      {questions[currentIndex].anwsers.map((anwser, index) => (
        <Button key={anwser.anwser} message={anwser.anwser} letter={anwser.letter} index={index} />
      ))}
      </div>
    </div>
  );
} else return <ScoreInfo />
};

export default QuestionContainer