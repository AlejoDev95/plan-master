import { useState } from "react";
import { Header } from "./components/Header";
import { TodoFooter } from "./components/TodoFooter";
import { TodoFilter } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { AddTodoModal } from "./components/AddModal";

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddTodo = (title: string, description: string) => {
    console.log({ title, description });
  };

  const openModal = () => setModalOpen(true);

  return (
    <>
      <main className="app-container">
        <Header />
        <section className="todo-box">
          <TodoFilter />
          <TodoList />
          <TodoFooter openModal={openModal} />
        </section>
        <p className="by">By AlejoDev95</p>
      </main>
      {modalOpen && (
        <AddTodoModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddTodo}
        />
      )}
    </>
  );
};
