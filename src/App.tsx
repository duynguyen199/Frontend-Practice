import "./App.css";
import TodoList from "./app/TodoList";
import AuthorPage from "./component/AuthorPage/AuthorPage";
import { AuthorProvider } from "./context/authorContext";

function App() {
  return (
    <>
      <TodoList/>
      {/* <AuthorProvider>
        {" "}
        <AuthorPage />
      </AuthorProvider> */}
    </>
  );
}

export default App;
