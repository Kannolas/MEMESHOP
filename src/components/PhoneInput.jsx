import React, { useRef, useEffect } from 'react';
import Inputmask from 'inputmask';

function PhoneInput() {
  const phoneInputRef = useRef(null);

  useEffect(() => {
    const phoneMaskOptions = {
      mask: '+7 (999) 999-99-99',
      placeholder: '+7 (___) ___-__-__',
      clearIncomplete: true,
      clearMaskOnLostFocus: true,
    };
    Inputmask(phoneMaskOptions).mask(phoneInputRef.current);
  }, []);

  // При потере фокуса скрываем маску, если пользователь не ввел полный номер
  const handleBlur = () => {
    const unmaskedValue = phoneInputRef.current.inputmask.unmaskedvalue();
    if (unmaskedValue.length < 10) {
      phoneInputRef.current.value = '';
    }
  };

  return (
    <input type="tel" name='reg-phone' id='reg-phone' ref={phoneInputRef} placeholder="+7 (___) ___-__-__" onBlur={handleBlur} className='outlined'/>
  );
}

export default PhoneInput;