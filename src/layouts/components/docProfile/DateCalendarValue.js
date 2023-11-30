import React, { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


export default function DateCalendarValue() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <StaticDatePicker orientation="landscape" />
    </LocalizationProvider>
  );
}