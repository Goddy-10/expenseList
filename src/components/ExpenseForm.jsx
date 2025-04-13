import React from "react";
import { useForm } from "react-hook-form";

const ExpenseForm = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1>EXPENSE TRACKER APP</h1>
      <form action="" className="mb-5" onSubmit={handleSubmit(addExpense)}>
        <div className="mb-3">
          <label htmlFor="Description" className="formn-label">
            Description
          </label>
          <input
            id="Description"
            type="text"
            className="form-control"
            {...register("Description", { minLength: 6, required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Amount" className="formn-label">
            Description
          </label>
          <input
            id="Amount"
            type="number"
            className="form-control"
            {...register("Amount", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="formn-label">
            Category
          </label>
          <select
            name=""
            id=""
            className="form-select"
            {...register("Category", { required: true })}
          >
            <option value=""></option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="groceries">Groceries</option>
            <option value="transport">Transport</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
