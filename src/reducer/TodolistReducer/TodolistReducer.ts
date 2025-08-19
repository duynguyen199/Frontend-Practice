import { act } from "react";
import type { Todo } from "../../app/Type";

export const initialValue = {
  idEdit: 0,
  todoValue: "",
  listTodo: [{ id: 1, todoName: "Learn ReactJS", completed: false }],
};

export const reducer = (state:any, action: any) => {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, todoValue: action.payload };

    case "ADD_TODO":
      return {
        ...state,
        listTodo: [...state.listTodo, action.payload],
        todoValue: "",
      };

    case "SET_COMPLETED":
      return {
        ...state,
        listTodo: state.listTodo.map((item: Todo) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        }),
      };
    case "DELETE":
      return {
        state,
        listTodo: state.listTodo.filter(
          (item: Todo) => item.id !== action.payload
        ),
      };
    case "SET_EDIT":
      return { ...state, idEdit: action.payload };
    case "SET_EDIT_VALUE":
      return {
        ...state,
        listTodo: state.listTodo.map((item: Todo) => {
          if (state.idEdit === item.id) {
            return { ...item, todoName: action.payload };
          } else {
            return item;
          }
        }),
      };
      case "SET_CLEAR_EDIT":
        return{
          ...state,
          idEdit: 0
        }
  }
};
