import ReactDOM from "react-dom";
import { useEffect, type PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
