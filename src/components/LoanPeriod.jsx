import React, { useState } from 'react';

const LoanPeriod = ({ setLoanPeriod }) => {
  const [period, setPeriod] = useState(0); // State to hold the selected period

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setPeriod(value);
    setLoanPeriod(value); // Update the loan period in the parent component
  };

  return (
    <div style={{ backgroundColor: '#123456', padding: '20px', borderRadius: '8px' }}>
      <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>Loan Period:</div>
      <div style={{ color: '#ffffff', fontSize: '20px', margin: '10px 0', textAlign: 'left' }}>
        <h2>{period} months</h2> 
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontSize: '14px' }}>
        <span>0 Months</span>
        <span>36 Months</span>
      </div>
      <input
        type="range"
        min="0"
        max="36"
        value={period}
        onChange={handleSliderChange}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default LoanPeriod;