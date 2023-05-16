import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="text-field">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd.MM.yyyy"
        placeholderText="ДД.ММ.ГГГГ"
        minDate={new Date('1900-01-01')}
        maxDate={new Date('2023-05-16')}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        className='outlined'
      />
      <label htmlFor="reg-age" className='outlined-placeholder outlined-placeholder-alwaysactive'>Date of birth</label>
    </div>
  );
}

export default DateInput;