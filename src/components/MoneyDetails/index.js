import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <div className="money-details-container">
      <div className="total-box money-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="money-details">
          <p className="type-of-money">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            {balance}
          </p>
        </div>
      </div>
      <div className="income-box money-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="money-details">
          <p className="type-of-money">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            {income}
          </p>
        </div>
      </div>
      <div className="expenses-box money-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="money-details">
          <p className="type-of-money">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
