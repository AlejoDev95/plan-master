import { Header } from "./components/Header";
import { TodoFooter } from "./components/TodoFooter";
import { TodoFilter } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <main className="app-container">
      <Header />
      <section className="todo-box">
        <TodoFilter />
        <TodoList />
        <TodoFooter />
      </section>
      <p className="by">By AlejoDev95</p>
    </main>
  );
};
