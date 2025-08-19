import React, { useMemo, useReducer, useState } from "react";
import { InputCommons } from "../component/input";
import ButtonCommon from "../component/button";
import "../style/input.css";
import type { Todo, Todos } from "./Type";
import {
  initialValue,
  reducer,
} from "../reducer/TodolistReducer/TodolistReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = useMemo(() => {
    const newTodo = {
      id: Date.now(),
      todoName: state.todoValue,
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  }, [state]);

  return (
    <div>
      {" "}
      <div
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
        className="todolist"
      >
        <InputCommons
          placeHolder="Enter Tasks..."
          inputValue={state.todoValue || ""}
          handleGetValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: "SET_VALUE", payload: e.target.value });
          }}
        />
        <ButtonCommon text="submit" handleSubmit={handleSubmit} />
      </div>
      <div className="todo-list">
        {state.listTodo.map((item: Todo) => (
          <li className="todo-item" key={item.id}>
            <div className="todo-detail">
              <input
                type="checkbox"
                onClick={() => {
                  dispatch({ type: "SET_COMPLETED", payload: item.id });
                }}
              />
              {item.completed ? (
                <div
                  className={`${
                    item.completed ? "todo-text-finish" : "todo-text"
                  }`}
                >
                  {item.todoName}
                </div>
              ) : (
                <div className="todo-contain">
                  {state.idEdit === item.id ? (
                    <InputCommons
                      inputValue={item.todoName}
                      handleGetValue={(
                        e: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        dispatch({
                          type: "SET_EDIT_VALUE",
                          payload: e.target.value,
                        });
                      }}
                    />
                  ) : (
                    <div
                      className={`${
                        item.completed ? "todo-text-finish" : "todo-text"
                      }`}
                    >
                      {item.todoName}
                    </div>
                  )}
                  {state.idEdit === item.id ? (
                    <p
                      onClick={() => {
                        dispatch({ type: "SET_CLEAR_EDIT" });
                      }}
                    >
                      Apply
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        dispatch({ type: "SET_EDIT", payload: item.id });
                      }}
                    >
                      Edit
                    </p>
                  )}
                  <p
                    onClick={() => {
                      dispatch({ type: "DELETE", payload: item.id });
                    }}
                  >
                    Delete
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
