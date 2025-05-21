import { Icon } from "../shared/icons/Icons";

const mockTodo = [
  { id: "1", text: "Actividad 1" },
  { id: "2", text: "Actividad 2" },
  { id: "3", text: "Actividad 3" },
  { id: "4", text: "Actividad 4" },
  { id: "5", text: "Actividad 5" },
  { id: "6", text: "Actividad 6" },
  { id: "7", text: "Actividad 7" },
  { id: "8", text: "Actividad 8" },
  { id: "9", text: "Actividad 9" },
  { id: "10", text: "Actividad 10" },
];

interface TodoListProps {
  openDetailsTodoOpen: () => void;
  openAddTodoModal: () => void;
}

export const TodoList = ({
  openAddTodoModal,
  openDetailsTodoOpen,
}: TodoListProps) => {
  return (
    <ul className="todo-list">
      {mockTodo.map((todo) => (
        <li key={todo.id} className="todo-item">
          <button className="todo-text">{todo.text}</button>
          <div className="todo-item_actions">
            <button className="view-btn" onClick={openDetailsTodoOpen}>
              <Icon name="Eye" />
            </button>
            <button className="edit-btn" onClick={openAddTodoModal}>
              <Icon name="Pencil" />
            </button>
            <button className="delete-btn">
              <Icon name="Trash2" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
