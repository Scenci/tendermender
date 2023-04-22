import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 16px;
`;

export const GYIInput = styled.input`
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  margin-left: 8px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  width: 100%;
`;

export const ExpensesColumn = styled.div`
  flex: 1;
  margin-right: 32px;
`;

export const AddCategoryButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1rem;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;

export const PieChartColumn = styled.div`
  flex: 1;
`;

export const YearlyProjectionsColumn = styled.div`
  flex: 1;
`;

