import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const BUDGET_LIMIT = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        const value = Number(event.target.value);
        if (value <= BUDGET_LIMIT && value >= totalExpenses) {
            setNewBudget(value);
            
        } else if (value < totalExpenses) {
            alert("Cannot reduce budget value lower than the spending");
        } else {
            setNewBudget(BUDGET_LIMIT);
            alert("The budget cannot exceed £" + BUDGET_LIMIT);
        }
    };
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;
