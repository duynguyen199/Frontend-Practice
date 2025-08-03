import React, { useState } from "react";
import type { DataCreateAuthor } from "../type/authors.types";
import AuthorInputCommons from "../../AuthorInputCommons";
import { authorApi } from "../../../api/AuthorAPI";

type Props = {
  setIsCreateAuthor: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormCreateAuthor = ({ setIsCreateAuthor }: Props) => {
  const [data, setData] = useState<DataCreateAuthor>({
    name: "",
    email: "",
    bio: "",
    avatar: "",
  });

  const array: { label: string; nameValue: keyof DataCreateAuthor }[] = [
    {
      label: "Name",
      nameValue: "name",
    },
    {
      label: "Email",
      nameValue: "email",
    },
    {
      label: "Bio",
      nameValue: "bio",
    },
    {
      label: "Avatar",
      nameValue: "avatar",
    },
  ];
  const handleGetValueInput = (value: string, key: keyof DataCreateAuthor) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };
  const handleSubmit =async ()=>{
    try {
        await authorApi.createAuthor(data)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      <h1>Form Create Author</h1>
      <div>
        {array.map((item) => {
          return (
            <AuthorInputCommons
              nameValue={item.nameValue}
              handleGetValueInput={handleGetValueInput}
              label={item.label}
            />
          );
        })}
      </div>

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormCreateAuthor;
