import { useState } from "react";
import { Header } from "./components/Header";
import { TodoFooter } from "./components/TodoFooter";
import { TodoFilter } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { AddTodoModal } from "./components/AddModal";
import { TodoDetailsModal } from "./components/TodoDetailsModal";

export const App = () => {
  const [addTodoModalOpen, setAddTodoModalOpen] = useState(false);
  const [detailsTodoOpen, setDetailsTodoOpen] = useState(false);

  const handleAddTodo = (title: string, description: string) => {
    console.log({ title, description });
  };

  const openAddTodoModal = () => setAddTodoModalOpen(true);
  const closeAddTodoModal = () => setAddTodoModalOpen(false);

  const openDetailsTodoOpen = () => setDetailsTodoOpen(true);
  const closeDetailsTodoOpen = () => setDetailsTodoOpen(false);

  return (
    <>
      <main className="app-container">
        <Header />
        <section className="todo-box">
          <TodoFilter />
          <TodoList
            openAddTodoModal={openAddTodoModal}
            openDetailsTodoOpen={openDetailsTodoOpen}
          />
          <TodoFooter openModal={openAddTodoModal} />
        </section>
        <p className="by">By AlejoDev95</p>
      </main>

      {addTodoModalOpen && (
        <AddTodoModal onClose={closeAddTodoModal} onSubmit={handleAddTodo} />
      )}

      {detailsTodoOpen && <TodoDetailsModal onClose={closeDetailsTodoOpen} />}
    </>
  );
};
