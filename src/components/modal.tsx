import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

interface IModalProps {
  children: React.ReactNode;
}

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children }: IModalProps) => {
  const el: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(el);
    }
    return () => {
      modalRoot?.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};

export default Modal;
