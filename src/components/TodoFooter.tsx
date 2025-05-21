import { Icon } from "../shared/icons/Icons";

interface TodoFooterProps {
  openModal: () => void;
}

export const TodoFooter = ({ openModal }: TodoFooterProps) => {
  return (
    <footer className="todo-footer">
      <span>5 Item left</span>

      <div className="filters">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <div className="footer-actions">
        <button className="btn-clear">Clear Completed</button>
        <button className="btn-add" onClick={openModal}>
          <Icon name="Plus" /> New Task
        </button>
      </div>
    </footer>
  );
};
