import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, Description: "2 packets of Maize flour", Amount:180,Category: "groceries" },
    { id: 2, Description: "1 Kg of Sugar",Amount:150, Category: "groceries" },
    { id: 3, Description: "Electricity Bill",Amount:1000, Category: "Utilities" },
    { id: 4, Description: "Car Fuel",Amount:4000, Category: "Transport" },
    { id: 5, Description: "1 Netflix subscription",Amount:1500, Category: "Entertainment" },
  ]);
  return (
    <>
      <ExpenseList items={expenses} />
      
    </>
  );
}

export default App;
