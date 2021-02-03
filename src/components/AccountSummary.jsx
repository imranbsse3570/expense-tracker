import React from "react";

const AccountSummary = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$00.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">$00.00</p>
      </div>
    </div>
  );
};

export default AccountSummary;
