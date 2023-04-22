import React from 'react';

const YearlyProjections = ({ expenses }) => {
  const yearlyExpenses = Object.entries(expenses).reduce(
    (acc, [category, monthlyAmount]) => {
      acc[category] = monthlyAmount * 12;
      return acc;
    },
    {}
  );

  return (
    <div>
      <h2>Yearly Projections</h2>
        {Object.entries(yearlyExpenses).map(([category, amount], index) => (
            <div key={index} className="expense-each">
                <label>
                    {category}: {amount}
                </label>
            </div>
       ))}    
    </div>
  );
};

export default YearlyProjections;
