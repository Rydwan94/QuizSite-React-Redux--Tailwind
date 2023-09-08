import { answer } from "../actions/actions";
import { useDispatch } from "react-redux";

const Button = ({ message }) => {

  const dispatch = useDispatch()

  const handleAnswerClick = () => {
    dispatch(answer())
    
  }


  return <button onClick={handleAnswerClick} className="mx-2 bg-black text-white rounded-md p-2">{message}</button>;
};
export default Button;
