import { useState } from 'react'
import './App.css'
import TopComp from './components/TopComp'
import LoanAmount from './components/LoanAmount'
import LoanPeriod from './components/LoanPeriod'
import Installment from './components/Installment'
import { FaArrowLeft, FaEllipsisH } from 'react-icons/fa'

function App() {
  const [loanAmount, setLoanAmount] = useState(1000000); // Initial loan amount
  const [loanPeriod, setLoanPeriod] = useState(6); // Initial loan period

  return (
    <>
    <div style={{ backgroundColor: '#123456' }}>
    <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <FaArrowLeft />
      Loan Calculator
      <FaEllipsisH />
    </h3>
      <div style={{ backgroundColor: '#123345', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <TopComp />
      </div>
      <div style={{ backgroundColor: '#123345', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <LoanAmount setLoanAmount={setLoanAmount} />
      </div>
      <div style={{ backgroundColor: '#123345', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <LoanPeriod setLoanPeriod={setLoanPeriod} />
      </div>
      <div style={{ backgroundColor: '#123345', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <Installment loanAmount={loanAmount} loanPeriod={loanPeriod} />
      </div>
     </div>
    </>
  )
}

export default App
