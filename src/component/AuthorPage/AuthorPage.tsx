import React, { useContext, useEffect, useState } from "react";
import { Author, type Authors, type DataCreateAuthor } from "./type/authors.types";
import instanceAxios from "../../api/axiosConfig";
import FormCreateAuthor from "./FormCreate/FormCreateAuthor";
import ButtonCommon from "../button";
import AuthorInputCommons from "../AuthorInputCommons";
import array from "./type/arrayLabel";
import { AuthorContext } from "../../context/authorContext";
import { authorApi } from "../../api/AuthorAPI";

type Props = {};

const AuthorPage = ({ props }: Props) => {
  const {  listAuthor, setListAuthor } = useContext(AuthorContext);

  const [isCreateAuthor, setIsCreateAuthor] = useState<boolean>(false);

  const [idEditAuthor, setIdEditAuthor] = useState<number | null>(null);

  const handleGetEditValueInput = (value: string, key: keyof DataCreateAuthor) => {
    setListAuthor((prev:any) => {
      return prev.map((author:Author) => {
        if (author.id === idEditAuthor) {
          return { ...author, [key]: value };
        }
        return author;
      });
    });
  } 
  const handleGetListAuthors = async () => {
    try {
      const response = await instanceAxios(
        "/authors?page=1&limit=10&name=dung"
      );

      setListAuthor(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitEditAuthor = async(id: number) => {
      try {
        const updateAuthor = listAuthor.find((author:Author)=> author.id=== id);
        await authorApi.updateAuthor(id,updateAuthor)
        setIdEditAuthor(null);
      } catch (error) {
        console.log(error)
      }
  }

  const handleSetEditAuthor = (id: number) => {
    setIdEditAuthor(id);
  };
  const handleDeleteValue = async (id: number) => {
    try {
      await authorApi.deleteAuthor(id);

      setListAuthor(listAuthor.filter((author: Author) => author.id !== id));
      console.log("Delete thanh cong");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetListAuthors();
  }, [isCreateAuthor]);
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

          {listAuthor.map((item: Author) => {
            return (
              <div>
                {item.id === idEditAuthor && (
                  <div>
                    {array.map((a) => {
                      return (
                        <AuthorInputCommons
                          nameValue={a.nameValue}
                          handleGetValueInput={handleGetEditValueInput}
                          label={a.label}
                        />
                      );
                    })}
                      <button onClick={()=>{handleSubmitEditAuthor(item.id)}}>Submit</button>

                  </div>
                )}
                {item.id !== idEditAuthor && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {" "}
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
                      <ButtonCommon
                        text="edit"
                        handleSubmit={() => {
                          handleSetEditAuthor(item.id);
                        }}
                      />
                      <ButtonCommon text="delete" handleSubmit={() => {handleDeleteValue(item.id)}} />
                    </div>
                  </div>
                )}
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
