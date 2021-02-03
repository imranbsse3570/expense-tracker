import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((transaction) => transaction.transactionAmount)
    .reduce((total, amount) => total + amount, 0)
    .toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h2 id="balance">${balance}</h2>
    </div>
  );
};

export default Balance;
