export interface Todo {
  id: number;
  todoName: string;
  completed: boolean;
}

export type Todos = Todo[];


export interface IInitialValue {
  id:number,
  inputValue:string,
  complete:boolean,
  listTodo:Todos
}