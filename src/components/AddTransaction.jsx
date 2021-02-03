import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const { addTransaction, transactions } = useContext(GlobalContext);

  const formOnSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: new Date().getTime(),
      description: description,
      transactionAmount: transactionAmount,
    });
    console.log(transactions);
    setDescription("");
    setTransactionAmount("");
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={formOnSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Detail of Transaction"
            required=""
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            id="transactionamount"
            placeholder="Dollar Value of Transaction"
            required="required"
            onChange={(e) => setTransactionAmount(e.target.value)}
            value={transactionAmount}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
