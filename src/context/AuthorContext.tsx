import { createContext, useState } from "react";
import type { Author, Authors } from "../component/AuthorPage/type/authors.types";

export const AuthorContext = createContext({})

export const AuthorProvider = ({children}:any)=>{
    const [listAuthor,setListAuthor] = useState<Authors[]>([]);

    const data={
        listAuthor,
        setListAuthor
    }

return<AuthorContext.Provider value={data}>{children}</AuthorContext.Provider>

}