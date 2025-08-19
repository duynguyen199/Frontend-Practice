import React, { memo } from "react";
type InputCommonsProps = {
  placeHolder?: string,
  inputValue:string,
 handleGetValue:(e:React.ChangeEvent<HTMLInputElement>) =>void
};

const InputCommons:React.FC<InputCommonsProps> = ({ placeHolder,inputValue,handleGetValue  }: Props) => {
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

export default memo(InputCommons)