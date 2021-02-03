import React from "react";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        <Transaction></Transaction>
      </ul>
    </div>
  );
};

export default TransactionHistory;
