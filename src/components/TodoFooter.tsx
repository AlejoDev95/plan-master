export const TodoFooter = () => {
  return (
    <footer>
      <span>5 Item left</span>
      <div className="filters">
        <button className="active">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear completed</button>
    </footer>
  );
};
