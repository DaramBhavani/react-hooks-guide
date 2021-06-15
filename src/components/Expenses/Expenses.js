import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date} />
                <ExpenseItem title={props.expense[1].title} amount={props.expense[1].amount} date={props.expense[1].date} />
                <ExpenseItem title={props.expense[2].title} amount={props.expense[2].amount} date={props.expense[2].date} />
            </Card>
        </div>
    );
}

export default Expenses;