import React from 'react'

const ExpenseFilter = (filterItem) => {
    return (
      <>
        
        <select name="" id="" className="form-select mb-5" onChange={(event)=> filterItem(event.target.value)}>
          <option value="">click here to see items</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="groceries">Groceries</option>
          <option value="transport">Transport</option>
        </select>
      </>
    );
}

export default ExpenseFilter