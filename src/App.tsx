import React, { useState } from 'react'
import Form from './components/Form'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExperseForm'
import ExpenseList from './components/expense-tracker/components/ExpenseList'

import categories from './components/expense-tracker/categories'

// export const categories = ["Groceries", "Utilities", "Entertainment" ] as const

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    {id: 1, description: "aaa", amount: 10, category: "Utilities"}, 

    {id: 2, description: "aba", amount: 10, category: "Utilities"}, 

    {id: 3, description: "abab", amount: 10, category: "Utilities"}, 

    {id: 4, description: "abba  ", amount: 10, category: "Utilities"}, 
  ])

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses



  return (
    <div>
      <h1 style={{color: "blueviolet", textAlign: "center", textDecoration: "underline"}}>SHOPPING LIST</h1>
       <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])  } />
       </div>

      <div className="mb-3">
        <ExpenseFilter  onSelectCategory={(category => setSelectedCategory(category))} />
      </div>

      {/* <Form /> */}

      <ExpenseList expenses={visibleExpenses} 
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}/>
    </div>
  )
}

export default App
