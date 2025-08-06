import type { DataCreateAuthor } from "../component/AuthorPage/type/authors.types";
import instanceAxios from "./axiosConfig";

export const authorApi = {
    createAuthor: async (data:DataCreateAuthor) =>{
        return instanceAxios.post("/authors", data)
    },
    updateAuthor: async(id:number,data:DataCreateAuthor)=>{
        return instanceAxios.put(`/authors/${id}`,data)
    },
    deleteAuthor:async(id:number)=>{
        return instanceAxios.delete(`/authors/${id}`)
    }
}