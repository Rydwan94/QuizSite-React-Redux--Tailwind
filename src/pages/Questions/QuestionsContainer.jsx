import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from '../../components/Button'
import ScoreInfo from "./ScoreInfo";

const QuestionContainer = () => {
  const data = useSelector((state) => state.anwsersReducer);

  const { questions, currentIndex} = data;
  if(currentIndex < questions.length){
  return (
    <div className="max-w-[1100px] flex flex-col items-center  w-full py-10">
      <h2 className="font-monsterrat text-center mb-2 pb-20 text-4xl max-md:text-2xl ">{questions[currentIndex].question}</h2>
      <div className="flex flex-col gap-4 w-full">
      {questions[currentIndex].answers.map((answer, index) => (
        <Button key={answer.answer} message={answer.answer} letter={answer.letter} index={index} />
      ))}
      </div>
    </div>
  );
} else return <ScoreInfo />
};

export default QuestionContainer