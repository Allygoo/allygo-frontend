import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/Modal.css';

const Modal = ({ open = false, onClose, children }) => {
  // Si no está abierto, no renderizamos nada
  if (!open) return null;

  // Cerrar con ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handler);
    // Evitamos scroll del body
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const content = (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">×</button>
        {children}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;
