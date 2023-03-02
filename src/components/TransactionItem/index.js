import './index.css'

const TransactionItem = props => {
  const {details, onClickDelete} = props
  const {id, amount, title, displayText} = details

  const onClickDeleteItem = () => {
    onClickDelete(id)
  }

  return (
    <li className="transaction-item">
      <p className="title-name">{title}</p>
      <p className="amount-rs">Rs {amount}</p>
      <p className="display-text">{displayText}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onClickDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
