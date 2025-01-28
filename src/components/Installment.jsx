import React, { useState } from "react";

const Installment = ({ loanAmount, loanPeriod }) => {
  const [installmentValue, setInstallmentValue] = useState(0); // Initial value

  React.useEffect(() => {
    const calculateInstallment = () => {
      const interestRate = 0.20; // Example annual interest rate as a decimal
      const monthlyInterestRate = interestRate / 12; // Convert annual rate to monthly
      const totalPayments = loanPeriod; // Total number of payments (months)
      const monthlyInstallment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
      setInstallmentValue(monthlyInstallment);
      //console.log("Calculated Monthly Installment:", monthlyInstallment); // Debugging line
    };

    calculateInstallment();
  }, [loanAmount, loanPeriod]);

  

  return (
    <div className="installment-container">
      <h2 className="text-bold" style={{ textAlign: 'left' }}>Estimated Monthly Installments</h2>
      <div className="installment-details" style={{ textAlign: 'left' }}>
        <label className="installment-label"></label>
        <h2 className="installment-value" style={{ textAlign: 'left' }}>
          {installmentValue > 0 
            ? `Rp ${installmentValue.toLocaleString()}` 
            : "N/A"}
        </h2>
      </div>
      <p className="installment-disclaimer">
        Installment fees may change according to the results of the
        verification of the physical condition of the vehicle of the branch
        office.
      </p>
      <button className="apply-loan-button" style={{ backgroundColor: '#0096C7' }} onClick={() =>  console.log("Calculated Monthly Installment:", installmentValue)}>
        APPLY LOAN
      </button>
    </div>
  );
};

export default Installment;



