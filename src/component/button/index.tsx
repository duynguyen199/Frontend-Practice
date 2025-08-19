
import type { memo } from "react";
import "../../style/button.css"


type Props = {
  text: string;
  handleSubmit: () => void;
};

const ButtonCommon = ({ text, handleSubmit }: Props) => {
  return <button className="todo-button" onClick={handleSubmit}>{text}</button>;
};

export default ButtonCommon;