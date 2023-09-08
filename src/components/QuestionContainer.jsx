import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from "./Button";

const QuestionContainer = () => {
  const data = useSelector((state) => state.anwsersReducer);

  const { questions, currentIndex, score } = data;
  if(currentIndex < 2){
  return (
    <div className="flex flex-col items-center">
      {score}
      <h3 className="text-center mb-2">{questions[currentIndex].question}</h3>
      <div>
      {questions[currentIndex].anwsers.map((anwser) => (
        <Button key={anwser.anwser} message={anwser.anwser} />
      ))}
      </div>
    </div>
  );
} else return <div>{score}</div>
};

export default QuestionContainer;
