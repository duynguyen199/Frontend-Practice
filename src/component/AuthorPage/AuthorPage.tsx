import React, { useEffect, useState } from "react";
import { Author, type Authors } from "./type/authors.types";
import instanceAxios from "../../api/axiosConfig";
import FormCreateAuthor from "./FormCreate/FormCreateAuthor";

type Props = {
}

const AuthorPage = ({ props }: Props) => {
  const [author, setAuthor] = useState<Authors>([]);

  const [isCreateAuthor, setIsCreateAuthor] = useState<boolean>(false);
  const handleGetListAuthors = async () => {
    try {
      const response = await instanceAxios(
        '/authors?page=1&limit=10&name=dung'
      );

      setAuthor(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetListAuthors();
  }, []);
  return (
    <div>
      {!isCreateAuthor && (
        <button
          onClick={() => {
            setIsCreateAuthor(true);
          }}
        >
          Tao Author
        </button>
      )}
      {!isCreateAuthor && (
        <>
          <h1>Danh Sach Author</h1>

          {author.map((item: Author) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img src={item.avatar} alt="" width={50} height={50} />
                </div>

                <div>
                  <div>{item.name}</div>

                  <div>{item.bio}</div>
                </div>
              </div>
            );
          })}
        </>
      )}

      {isCreateAuthor && (
        <FormCreateAuthor setIsCreateAuthor={setIsCreateAuthor} />
      )}
    </div>
  );
};

export default AuthorPage;
