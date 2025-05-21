import { Modal } from "./Modal";

interface TodoDetailsModalProps {
  onClose: () => void;
}

export const TodoDetailsModal = ({ onClose }: TodoDetailsModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="modal-content">
        <h2>Tarea 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          provident adipisci doloremque veniam quibusdam ea a nam quam nemo
          exercitationem dolor, eveniet iure consequatur tempore vel, enim
          reprehenderit obcaecati temporibus!
        </p>
        <div className="modal-actions">
          <button type="button" className="close-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </Modal>
  );
};
