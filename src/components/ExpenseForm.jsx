import React, { useState, useEffect } from 'react';

import './scss/ExpenseForm.scss';

const ExpenseForm = ({ onExpenseUpdate, categoryName }) => {
    const [amounts, setAmounts] = useState([0]);

    useEffect(() => {
      onExpenseUpdate(amounts);
    }, [amounts, onExpenseUpdate]);
  
    const handleAmountChange = (index, newAmount) => {
      const updatedAmounts = amounts.map((amount, i) => (i === index ? parseFloat(newAmount) : amount));
      setAmounts(updatedAmounts);
    };
  
    const addNewAmountField = () => {
      setAmounts([...amounts, 0]);
    };

  return (
    <div className="expense-form">
      <div className="expense-form__header">{categoryName}</div>
      {amounts.map((amount, index) => (
        <div key={index} className="expense-form__field">
          <label htmlFor={`amount-${index}`} className="expense-form__field__label">
            Amount:
          </label>
          <input
            type="number"
            id={`amount-${index}`}
            min="0"
            step="5"
            value={amount}
            onChange={(event) => handleAmountChange(index, event.target.value)}
            className="expense-form__field__input"
          />
        </div>
      ))}
      <button type="button" onClick={addNewAmountField} className="expense-form__add-button">
        +
      </button>
    </div>
  );
};

export default ExpenseForm;
