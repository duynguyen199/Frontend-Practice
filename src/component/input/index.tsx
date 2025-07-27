import React, { useReducer } from "react";
import { initialValue, reducer } from "../../reducer/TodolistReducer/TodolistReducer";
type InputCommonsProps = {
  placeHolder?: string,
  inputValue:string,
 handleGetValue:(e:React.ChangeEvent<HTMLInputElement>) =>void
};

export const InputCommons:React.FC<InputCommonsProps> = ({ placeHolder,inputValue,handleGetValue  }: Props) => {
  return (
    <div className="todo-input">
      <input
        placeholder={placeHolder}
        value={inputValue}
        onChange={handleGetValue}
      />
    </div>
  );
};
