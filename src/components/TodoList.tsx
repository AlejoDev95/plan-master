const mockTodo = [
  { id: "1", text: "Actividad 1" },
  { id: "2", text: "Actividad 2" },
  { id: "3", text: "Actividad 3" },
  { id: "4", text: "Actividad 4" },
];

export const TodoList = () => {
  return (
    <ul>
      {mockTodo.map((todo) => (
        <li key={todo.id}>
          <div className="circle" />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};
