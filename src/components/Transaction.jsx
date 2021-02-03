import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ id, transaction }) => {
  const amount = transaction.transactionAmount;
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={`money ${amount >= 0 ? "plus" : "minus"}`}>
      {transaction.description}
      <span>{amount >= 0 ? `+${amount}` : amount}</span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

export default Transaction;
