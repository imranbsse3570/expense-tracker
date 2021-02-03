import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  //   const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {/* {transactions.map((transaction) => (
          <Transaction
            id={transaction.id}
            transaction={transaction}
            key={transaction.id}
          />
        ))} */}
      </ul>
    </div>
  );
};

export default TransactionHistory;
