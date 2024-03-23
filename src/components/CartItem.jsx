import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux';
import { incrementAmount, decrementAmount } from '../cartActions';

const CartItem = ({id, img, title, price, amount, onRemove }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAmount(id));
  };

  const handleDecrement = () => {
    dispatch(decrementAmount(id));
    if (amount < 2) {
      onRemove()
    }
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={onRemove}>remove</button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrement}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecrement}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem
