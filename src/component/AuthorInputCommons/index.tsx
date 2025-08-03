import React from "react";
import type { DataCreateAuthor } from "../AuthorPage/type/authors.types";

type Props = {
  label: string;
  nameValue: keyof DataCreateAuthor;
  handleGetValueInput: (value: string, key: keyof DataCreateAuthor) => void;
};

const AuthorInputCommons = ({
  label,
  nameValue,
  handleGetValueInput,
}: Props) => {
    return (
    <>
      <div>{label}</div>
      <input
        type="text"
        onChange={(e) => handleGetValueInput(e.target.value, nameValue)}
      />
    </>
  );
};


export default AuthorInputCommons;
