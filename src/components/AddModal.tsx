import { Modal } from "./Modal";

interface AddTodoModalProps {
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

export const AddTodoModal = ({ onClose, onSubmit }: AddTodoModalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;
    onSubmit(title, description);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-content">
        <h2>Agregar nueva tarea</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input type="text" name="title" placeholder="Título" />
          <textarea name="description" rows={5} placeholder="Descripción" />
          <div className="modal-actions">
            <button type="submit">Agregar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
