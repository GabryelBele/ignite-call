import React from 'react';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  width: 540px;
  height: 438px;
  border-radius: 6px;
  background-color: #202024;
  border: 1px solid #2a2a2f;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  height: 136px;
  border-radius: 6px 6px 0 0;
  padding: 0px 24px ;
`;

const MonthName = styled.h2`
  font-size: 16px;
  line-height: 22.5px;
  color: #FFF;
`;

const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px;
  background-color: #202024;
  border-radius: 6px;
`;

const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
`;

const MonthDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 100%;
  height: 306px;
`;

const Day = styled.div<{ isWeekend: boolean }>`
  align-items: center;
  padding: 10px;
  text-align: center;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const DayWeek = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #A9A9B2;
`;

const Calendar: React.FC = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthDays = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    isWeekend: i % 7 === 5 || i % 7 === 6,
  }));

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <MonthName>November 2024</MonthName>
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </CalendarHeader>
      <CalendarBody>
        <DaysOfWeek>
          {daysOfWeek.map((day, index) => (
            <DayWeek key={index}>{day}</DayWeek>
          ))}
        </DaysOfWeek>
        <MonthDays>
          {monthDays.map((date, index) => (
            <Day key={index} isWeekend={date.isWeekend}>
              {date.day}
            </Day>
          ))}
        </MonthDays>
      </CalendarBody>
    </CalendarWrapper>
  );
};

export default Calendar;
