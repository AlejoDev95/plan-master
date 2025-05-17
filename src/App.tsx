import { Header } from "./components/Header";
import { TodoFooter } from "./components/TodoFooter";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <main className="app-container">
      <Header />
      <section className="todo-box">
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </section>
    </main>
  );
};
