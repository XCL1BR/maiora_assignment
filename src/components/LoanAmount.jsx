import React, { useState } from 'react';

const LoanAmount = ({ setLoanAmount }) => {
  const [amount, setAmount] = useState(0); // State to hold the selected amount

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setLoanAmount(value); // Update the loan amount in the parent component
  };

  return (
    <div style={{ backgroundColor: '#123456', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'left' }}>
      <label style={{ fontSize: '18px', color: '#fff' ,  fontWeight: 'bold' }}>Loan Amount:</label>
      <div style={{ fontSize: '24px', color: '#fff', margin: '10px 0' }}> Rp {amount.toLocaleString()}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '14px' }}>
        <span>Min: Rp 1,000,000</span>
        <span>Max: Rp 17,480,000</span>
      </div>
      <input
        type="range"
        min="1000000"
        max="17480000"
        value={amount}
        onChange={handleSliderChange}
        style={{ width: '100%', cursor: 'pointer'}}
      />
    </div>
  );
};

export default LoanAmount;