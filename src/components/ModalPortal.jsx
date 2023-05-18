import React from 'react';
import ReactDOM from 'react-dom';
const ModalPortal = ({ children, isActive }) => {
  const modalRoot = document.getElementById('root');
  const el = document.createElement('div');

  React.useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(
    <div className="Modal">{children}</div>
, el);
};

export default ModalPortal;