import ProgressBar from "../components/ProgressBar";
import QuestionContainer from "../pages/Questions/QuestionsContainer";

const Questions = () => {
 return (
  <div className="flex flex-col max-md:flex-col-reverse justify-between py-14 items-center bg-[#EDE8E3] min-h-screen animate-fade-up">
    <QuestionContainer />
    <ProgressBar />
  </div>
 )
};

export default Questions;
