import './App.css'

import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import "@skyscanner/bpk-foundations-web/tokens/base.scss";

import React, { useState } from 'react'; 
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import { format } from 'date-fns';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },

];


function App(props) {      

  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });

  const handleDateSelect = (date) => {

    setSelectionConfiguration({
      type: props.selectionConfiguration?.type || selectionConfiguration.type,     
      date: date,
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <BpkText>Flight schedule</BpkText>

      <div>
        <BpkInput
          id="dateInput"
          type={INPUT_TYPES.text}
          name="date"
          value={(selectionConfiguration.date || '').toString()}
          placeholder="Departure date"
        />
        <BpkCalendar
          id="calendar"
          onDateSelect={handleDateSelect} 
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={selectionConfiguration} 
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <BpkButton onClick={() => alert('Hello from Backpack!')}>
          Continue
        </BpkButton> 
      </div>
    </div>
  );
}

export default App;