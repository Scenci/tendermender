import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import PieChartComp from './components/PieChartComp';
import YearlyProjections from './components/YearlyProjections';
import {
  Container,
  Title,
  GYIInput,
  Section,
  ExpensesColumn,
  AddCategoryButton,
  PieChartColumn,
  YearlyProjectionsColumn,
} from './AppStyles';

const App = () => {
  const [gyi, setGYI] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [expenses, setExpenses] = useState({
    'Rent/Mortage': 0,
    'Utilities/Bills':0,
    'Food & Drink':0,
    'Travel':0,
    'Entertainment':0
  });


  const handleExpenseUpdate = (category, amounts) => {
    const total = amounts.reduce((acc, amount) => acc + amount, 0);
    setExpenses({ ...expenses, [category]: total });
  };

  const handleAddExpenseCategory = (categoryName) => {
    setExpenses({ ...expenses, [categoryName]: 0 });
  };

  const chartData = Object.entries(expenses).map(([name, value]) => ({ name, value }));

  return (
    <Container>
      <Title>TenderMender</Title>
      <div>
        <label htmlFor="gyi">Gross Yearly Income: </label>
        <GYIInput
          type="number"
          id="gyi"
          min="0"
          value={gyi}
          onChange={(event) => setGYI(parseFloat(event.target.value))}
        />
      </div>
      <div>Monthly Income: {monthlyIncome.toFixed(2)}</div>
      <Section>
        <ExpensesColumn>
          {Object.keys(expenses).map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              <ExpenseForm
                onExpenseUpdate={(expense) => handleExpenseUpdate(category, expense)}
              />
            </div>
          ))}
          <AddCategoryButton
            onClick={() =>
              handleAddExpenseCategory(prompt('Enter a new expense category'))
            }
          >
            Add Expense Category
          </AddCategoryButton>
        </ExpensesColumn>
        <PieChartColumn>
          <PieChartComp data={chartData} />
        </PieChartColumn>
        <YearlyProjectionsColumn>
          <YearlyProjections expenses={expenses} />
        </YearlyProjectionsColumn>
      </Section>
    </Container>
  );
};

export default App;
