import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 20%;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
`;

const CalendarContainer = styled.div`
  width: 40%;
  padding: 20px;
  box-sizing: border-box;
`;

const CalendarWrapper = styled.div`
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  font-family: 'Arial', sans-serif;

  .react-calendar {
    border: none;
    border-radius: 0;
  }

  .react-calendar__tile--active {
    background-color: #007bff;
    color: #fff;
  }

  .react-calendar__tile--hover {
    background-color: #e0e0e0;
  }

  .react-calendar__month-view__weekdays {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5rem;
  }

  .react-calendar__month-view__days__day {
    padding: 0.75rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const Sidebar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    // You can perform additional actions when the date changes
  };

  return (
    <>
      {/* <SidebarContainer>
        <h2>Sidebar</h2>
        Your sidebar content goes here
        ... other sidebar content
      </SidebarContainer> */}

      <CalendarContainer>
        {/* Calendar component */}
        <CalendarWrapper>
          <StyledCalendar onChange={handleDateChange} value={date} />
        </CalendarWrapper>
        {/* Additional content can be added below the calendar */}
      </CalendarContainer>
    </>
  );
};

export default Sidebar;
