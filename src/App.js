import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';

const categories = [
  { id: 'rent-mortgage', displayName: 'Rent/Mortgage' },
  { id: 'utilities-bills', displayName: 'Utilities/Bills' },
  { id: 'transportation-travel', displayName: 'Transportation/Travel' },
  { id: 'food-entertainment', displayName: 'Food & Entertainment' },
];

const App = () => {
  const [expensesByCategory, setExpensesByCategory] = useState({});

  const handleExpenseUpdate = (categoryId, expense) => {
    setExpensesByCategory((prevExpenses) => ({
      ...prevExpenses,
      [categoryId]: expense,
    }));
  };

  return (
    <div>
      <h1>TenderMender</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.displayName}</h2>
          <ExpenseForm
            onExpenseUpdate={(expense) => handleExpenseUpdate(category.id, expense)}
          />
        </div>
      ))}
      {/* Add other components here */}
    </div>
  );
};

export default App;
