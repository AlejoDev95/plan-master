export const TodoFooter = () => {
  return (
    <footer className="todo-footer">
      <span>5 Item left</span>

      <div className="filters">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <button className="btn-clear">Clear Completed</button>
    </footer>
  );
};
