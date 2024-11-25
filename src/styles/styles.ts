// src/components/styles.ts
import styled from 'styled-components'

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const CalendarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CalendarTitle = styled.h2`
  font-size: 24px;
  color: #333;
`

export const CalendarActions = styled.div`
  display: flex;
  gap: 8px;
`

export const CalendarBody = styled.table`
  width: 100%;
  margin-top: 16px;
  text-align: center;
  border-collapse: collapse;
`

export const CalendarDay = styled.button<{ isToday: boolean, disabled: boolean }>`
  padding: 8px;
  margin: 4px;
  background-color: ${props => (props.isToday ? '#4CAF50' : '#FFF')};
  border: 1px solid #ddd;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${props => !props.disabled && '#f1f1f1'};
  }
`
