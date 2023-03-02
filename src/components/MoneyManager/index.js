import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: +event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const filterList = transactionTypeOptions.filter(
      each => type === each.optionId,
    )

    if (type === 'EXPENSES') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        displayText: filterList[0].displayText,
      }

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        type: 'INCOME',
        amount: '',
      }))
    } else {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount,
        displayText: filterList[0].displayText,
      }

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        type: 'INCOME',
        amount: '',
      }))
    }
  }

  onClickDeleteTransaction = id => {
    const {transactionsList} = this.state

    const transaction = transactionsList.filter(
      eachTransaction => eachTransaction.id === id,
    )

    if (transaction[0].displayText === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses - transaction[0].amount,
      }))
    }

    const filteredTransactionsList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionsList: filteredTransactionsList})
  }

  getIncome = () => {
    const {transactionsList} = this.state

    let income = 0

    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.displayText === transactionTypeOptions[0].displayText
      ) {
        income += eachTransaction.amount
      }
    })

    return income
  }

  getExpenses = () => {
    const {transactionsList} = this.state

    let expenses = 0

    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.displayText === transactionTypeOptions[1].displayText
      ) {
        expenses += eachTransaction.amount
      }
    })

    return expenses
  }

  getBalance = () => {
    const {transactionsList} = this.state

    let balance = 0
    let income = 0
    let expenses = 0

    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.displayText === transactionTypeOptions[1].displayText
      ) {
        expenses += eachTransaction.amount
      } else {
        income += eachTransaction.amount
      }
    })

    balance = income - expenses

    return balance
  }

  render() {
    const {transactionsList, title, type, amount} = this.state

    console.log(type)

    const income = this.getIncome()
    const expenses = this.getExpenses()
    const balance = this.getBalance()

    return (
      <div className="bg-container">
        <div className="customer-container">
          <p className="name">Hi Richard</p>
          <p className="description">
            Welcome back to your <span className="span">Money manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="transaction-container">
          <div className="input-container">
            <h1 className="input-heading">Add Transaction</h1>
            <form className="form-box" onSubmit={this.onSubmitForm}>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                placeholder="TITLE"
                id="title"
                className="text-box"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount" className="label" value={amount}>
                AMOUNT
              </label>
              <input
                type="text"
                placeholder="AMOUNT"
                id="amount"
                className="text-box"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="text-box"
                value={type}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-item-container">
            <h1 className="history-heading">History</h1>
            <div className="columns-details-box">
              <p className="title">Title</p>
              <p className="history-amount">Amount</p>
              <p className="type">Type</p>
            </div>
            <ul className="money-manager-details">
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  details={eachTransaction}
                  onClickDelete={this.onClickDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
