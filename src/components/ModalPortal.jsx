import React from 'react';
import ReactDOM from 'react-dom';
import ClearIcon from '@mui/icons-material/Clear';
import zIndex from '@mui/material/styles/zIndex';
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
      <div className="Modal">
       {children}
       <ClearIcon sx={{top:'50px', right: '50px', fontSize:'10rem', position:'absolute', zIndex: '999999', color: '#968c8c'}}/>
      </div>
      
, el);
};

export default ModalPortal;