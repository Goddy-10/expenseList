import React from "react";

const ExpenseList = ({ items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.Description}</td>
            <td>{item.Amount}</td>
                <td>{item.Category}</td>
                <td><button className="btn btn-outline-danger">Delete</button></td>
          </tr>
        ))}
        <tr>
          <td><h3>Total</h3></td>
                  <td><h3>{items.reduce((total, item) => total + item.Amount, 0).toFixed(2)}</h3></td>
          
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;
