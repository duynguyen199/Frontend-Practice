import type { DataCreateAuthor } from "../component/AuthorPage/type/authors.types";
import instanceAxios from "./axiosConfig";

export const authorApi = {
    createAuthor: async (data:DataCreateAuthor) =>{
        return instanceAxios.post("/authors", data)
    }
}